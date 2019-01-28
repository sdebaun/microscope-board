import { ApolloClient } from 'apollo-client'
import { split, concat, Operation, ApolloLink } from 'apollo-link'

import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'

const HTTP_LINK_URI = 'https://api.graph.cool/simple/v1/cjre1ft0j65ik0122n839025k'
const WS_LINK_URI = 'wss://subscriptions.us-west-2.graph.cool/v1/cjre1ft0j65ik0122n839025k'

export default function() {
  const httpLink = new HttpLink({
    uri: HTTP_LINK_URI
  })
  
  const wsLink = new WebSocketLink({
    uri: WS_LINK_URI,
    options: {
      reconnect: true
    }
  })
  
  interface Definition {
    kind: string
    operation?: string
  }
  
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${localStorage.getItem('id_token') || null}`
      }
    })
  
    if (forward) { return forward(operation) }
    else { return null }
  })
  
  const authedHttpLink = concat(authMiddleware, httpLink)
  
  const isSubscription = ({query}: Operation) => {
    const { kind, operation }: Definition = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  }
  
  const link = split(isSubscription, wsLink, authedHttpLink)
  
  const cache = new InMemoryCache()
  
  return new ApolloClient({
    link,
    cache,
  })
  
}
