// this is being added to react-apollo-hooks but it hasnt been merged into a release yet

import { DocumentNode, GraphQLError } from 'graphql'
import { OperationVariables, FetchPolicy } from 'apollo-client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import * as isEqual from 'react-fast-compare'

export type SubscriptionOptions<TVariables> = {
  variables?: TVariables;
  fetchPolicy?: FetchPolicy;
}

export const useSubscription = <T, TVariables = OperationVariables>(
  query: DocumentNode,
  options: SubscriptionOptions<TVariables> = {},
  callback: ({data}: {data: T}) => void
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
        callback({data})
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

  // return useMemo(() => ({
  //   data, error, loading,
  // }),
  // [
  //   data, error, loading,
  // ])
}