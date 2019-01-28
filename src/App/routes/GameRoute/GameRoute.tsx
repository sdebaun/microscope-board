import React from 'react'
import { RouteComponentProps } from 'react-router'

import { Container, Header, Overview, ScrollingContent } from 'App/Layout'

import { useSubscribedGame } from './useSubscribedGame';

import { NavView } from './NavView'
import { OverviewView } from './OverviewView'
import { PeriodsView } from './PeriodsView'

export const GameRoute: React.SFC<RouteComponentProps<{id: string}>> = ({match: { params: { id }}}) => {
  const game = useSubscribedGame(id)
  return (
    <Container>
      <Header><NavView {...{game}}/></Header>
      <Overview><OverviewView {...{game}}/></Overview>
      <ScrollingContent><PeriodsView {...{game}}/></ScrollingContent>
    </Container>
  )
}
