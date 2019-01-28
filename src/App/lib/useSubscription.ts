// this is being added to react-apollo-hooks but it hasnt been merged into a release yet

import { DocumentNode, GraphQLError } from 'graphql'
import ApolloClient, { OperationVariables, FetchPolicy } from 'apollo-client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useApolloClient, useQuery } from 'react-apollo-hooks'
import * as isEqual from 'react-fast-compare'
import { _ModelMutationType } from '../types/globalTypes';

export type SubscriptionOptions<TVariables> = {
  variables?: TVariables;
  fetchPolicy?: FetchPolicy;
}

// a sub result for graph.cool auto-generated subscriptions
type SubResult<TNode> = {
  mutation: _ModelMutationType
  node: TNode | null
  updatedFields: string[] | null;
  previousValues: {id: string} | null;
}

type WithID = {
  id: string
}

export const useSubscribedCollection = <TQuery, TSub, TItem extends WithID, TVariables = OperationVariables>(
  colQuery: DocumentNode,
  subQuery: DocumentNode,
  colResult: ({data}: {data: TQuery}) => TItem[],
  subResult: ({data}: {data: TSub}) => SubResult<TItem> | null,
  writeResult: (collection: TItem[]) => {[key: string]: TItem[]}
): TItem[] => {
  const { data, error } = useQuery<TQuery>(colQuery)
  if (error || !data) { throw(error) }
  const collection = colResult({data})
  useSubscription<TSub>(subQuery, {}, ({data, client}) => {
    if (!data) { throw('No data from subscription') }
    const result = subResult({data})
    if (!result) { throw('No result from subscription') }
    if (result.mutation == _ModelMutationType.CREATED && result.node) {
      client.writeQuery({
        query: colQuery,
        data: writeResult([...collection, result.node])
      })
    }
    if (result.mutation == _ModelMutationType.DELETED && result.previousValues) {
      const deletedId = result.previousValues.id
      client.writeQuery({
        query: colQuery,
        data: writeResult(collection.filter(g => g.id !== deletedId))
      })
    }
    if (result.mutation == _ModelMutationType.UPDATED && result.node) {
      const updateId = result.node.id
      const newItem = result.node
      client.writeQuery({
        query: colQuery,
        data: writeResult(collection.map(g => g.id === updateId ? newItem : g))
      })
    }
  })
  return collection
}

export const useSubscribedItem = <TQuery, TSub, TItem, TVariables = OperationVariables>(
  colQuery: DocumentNode,
  subQuery: DocumentNode,
  colResult: ({data}: {data: TQuery}) => TItem | null,
  subResult: ({data}: {data: TSub}) => SubResult<TItem> | null,
  writeResult: (item: TItem | null) => {[key: string]: TItem | null},
  opts: {variables?: TVariables} = {}
): TItem => {
  const { data, error } = useQuery<TQuery>(colQuery, opts)
  if (error || !data) { throw(error) }
  const item = colResult({data})
  if (!item) { throw('no item returned from selector') }
  useSubscription<TSub>(subQuery, opts, ({data, client}) => {
    if (!data) { throw('No data from subscription') }
    const result = subResult({data})
    if (!result) { throw('No result from subscription') }
    if (result.mutation == _ModelMutationType.CREATED && result.node) {
      client.writeQuery({
        query: colQuery,
        data: writeResult(result.node),
        variables: opts.variables
      })
    }
    if (result.mutation == _ModelMutationType.DELETED && result.previousValues) {
      client.writeQuery({
        query: colQuery,
        data: writeResult(null),
        variables: opts.variables,
      })
    }
    if (result.mutation == _ModelMutationType.UPDATED && result.node) {
      console.log('update event', result.node)
      client.writeQuery({
        query: colQuery,
        data: writeResult(result.node),
        variables: opts.variables,
      })
    }
  })
  return item
}

export const useSubscription = <T, TVariables = OperationVariables>(
  query: DocumentNode,
  options: SubscriptionOptions<TVariables> = {},
  callback: ({data, client}: {data: T, client: ApolloClient<object>}) => void
): void => {
  const prevOptions = useRef<typeof options | null>(null)
  const client = useApolloClient()
  const [data, setData] = useState<T | {}>({})
  const [error, setError] = useState<GraphQLError | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    prevOptions.current = options
    const subscription = client.subscribe<{ data: T }, TVariables>({
      ...options, query
    })
    .subscribe({
      next: ({ data }) => {
        setData(data)
        callback({data, client})
      },
      error: (err) => {
        setError(err)
        setLoading(false)
      },
      complete: () => {
        setLoading(false)
      },
    })

    return () => {
      subscription.unsubscribe()
    }
  },
  [
    query,
    (isEqual as any)(prevOptions.current, options) ? prevOptions.current : options,
    data,
    error,
    loading,
  ])
}