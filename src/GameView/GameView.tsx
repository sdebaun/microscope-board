import React from 'react'
import { Game } from '../data'

import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'


import { NavView } from './NavView'
import { OverviewView } from './OverviewView'
import { PeriodsView } from './PeriodsView'

import { RouteComponentProps } from 'react-router'

import { GetGame, GetGame_Game } from './types/GetGame'
// import PeriodsView from './TrelloPeriodsView'


import styled from 'styled-components'

import Layout, { FixedStyles, FoundationStyles, BreadthStyles, ExtraStyles } from '../Layout'
// import {  } from 'react-router/Router'

// TODO: im pretty sure theres a better way to do this, more idiomatic to styled-components
const Control = styled(NavView)`${FixedStyles}`
const Overview = styled(OverviewView)`${FoundationStyles}`
const Periods = styled(PeriodsView)`${BreadthStyles}`
const Zoom = styled.div`${ExtraStyles}`

export const GameView: React.SFC<{game: GetGame_Game}> = ({game}) =>
  <Layout>
    <Control {...{game}}/>
    <Overview {...{game}}/>
    <Periods {...{periods: game.periods || []}}/>
  </Layout>

const GET_GAME = gql`
  query GetGame($id: ID) {
    Game(id: $id) {
      id
      bigPicture
      currentFocus {
        id
      }
      palette {
        id
      }
      legacies {
        id
      }
      focii {
        id
        title
      }
      periods {
        id
        tone
        title
        seq
        events {
          id
          tone
          title
          seq
          scenes {
            id
            tone
            question
            seq
          }
        }
      }
    }
  }
`

// this should be queried from apollo based on id
export const GameRoute: React.SFC<RouteComponentProps<{id: string}>> = ({match: { params: { id }}}) => {
  console.log('id', id)
  const { data, error } = useQuery<GetGame>(GET_GAME, { variables: { id }})
  if (error || !data || !data.Game) { console.log(error); console.log(data); return <div>Error!</div> }
  console.log('game', data.Game)
  return <GameView {...{game: data.Game}}/>
}


