import React, {Suspense} from 'react';

import { game } from './data'
import { Route } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo-hooks'
import createApolloClient from './createApolloClient'

import { HomeView } from './HomeView'
import { GameRoute } from './GameView'

const client = createApolloClient()

const App: React.SFC<{}> = () =>
  <ApolloProvider {...{client}}>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/" component={HomeView}/>
      <Route path="/game/:id" component={GameRoute}/>
    </Suspense>
  </ApolloProvider>

export default App
