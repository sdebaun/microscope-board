import React, {Suspense} from 'react';
import { Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo-hooks'

import { HomeRoute } from 'App/routes/HomeRoute'
import { GameRoute } from 'App/routes/GameRoute'

import createApolloClient from './createApolloClient'

const client = createApolloClient()

const App: React.SFC<{}> = () =>
  <ApolloProvider {...{client}}>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/" component={HomeRoute}/>
      <Route path="/game/:id" component={GameRoute}/>
      {/* <Route path="/me" component={MeRoute}/> */}
      {/* etc */}
    </Suspense>
  </ApolloProvider>

export default App
