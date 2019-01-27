import React from 'react';

import { game } from './data'
import { Route } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'
import createApolloClient from './createApolloClient'

import { HomeView } from './HomeView'
import { GameView } from './GameView'

// this should be queried from apollo based on id
const GameRoute: React.SFC<{id: string}> = ({id}) =>
  <GameView {...{game}}/>

const client = createApolloClient()

const App: React.SFC<{}> = () =>
<ApolloProvider {...{client}}>
  <Route exact path="/" component={HomeView}/>
  <Route path="/game/:id" component={GameRoute}/>
</ApolloProvider>

export default App
