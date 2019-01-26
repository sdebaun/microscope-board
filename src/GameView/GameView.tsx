import React from 'react'
import { Game } from '../data'

import { NavView } from './NavView'
import { OverviewView } from './OverviewView'
import { PeriodsView } from './PeriodsView'
// import PeriodsView from './TrelloPeriodsView'

import styled from 'styled-components'

import Layout, { FixedStyles, FoundationStyles, BreadthStyles, ExtraStyles } from '../Layout'
// import {  } from 'react-router/Router'

// TODO: im pretty sure theres a better way to do this, more idiomatic to styled-components
const Control = styled(NavView)`${FixedStyles}`
const Overview = styled(OverviewView)`${FoundationStyles}`
const Periods = styled(PeriodsView)`${BreadthStyles}`
const Zoom = styled.div`${ExtraStyles}`

export const GameView: React.SFC<{game: Game}> = ({game}) =>
  <Layout>
    <Control {...{game}}/>
    <Overview {...{game}}/>
    <Periods {...{periods: game.periods}}/>
  </Layout>
