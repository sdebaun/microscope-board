import React, { Suspense } from 'react'
import styled from 'styled-components'

import { AddGame } from './AddGame';

import { Loader, Dimmer, Segment } from 'semantic-ui-react'

const SegmentLoader: React.SFC = props =>
  <Segment><Dimmer active><Loader {...props}/></Dimmer></Segment>

import { GameList } from './GameList'

export const User: React.SFC = () =>
  <>
    <h1>The User</h1>
    <Suspense fallback={<SegmentLoader />}>
      <GameList/>
      <AddGame/>
    </Suspense>
  </>