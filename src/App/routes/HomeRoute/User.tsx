import React, { Suspense } from 'react'
import styled from 'styled-components'

import { AddGame } from './AddGame';

import { CircularProgress } from '@material-ui/core'

const Panel = styled.div`
  background-color: white;
`

import { GameList } from './GameList'
export const User: React.SFC<{className?: string}> = ({className}) =>
  <div {...{className}}>
    <h1>The User</h1>
    <Suspense fallback={<CircularProgress color='secondary'/>}>
      <Panel>
        <GameList/>
        <AddGame/>
      </Panel>
    </Suspense>
  </div>