import React from 'react';

import { game } from './data'
import { Route, Link } from 'react-router-dom'

import { HomeView } from './HomeView'
import { GameView } from './GameView'

// this should be queried from apollo based on id
const GameRoute: React.SFC<{id: string}> = ({id}) =>
  <GameView {...{game}}/>

const App: React.SFC<{}> = () =>
<>
  <Route exact path="/" component={HomeView}/>
  <Route path="/game/:id" component={GameRoute}/>
</>

export default App
