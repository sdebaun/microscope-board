import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'


import { NavView } from './NavView'
import { OverviewView } from './OverviewView'
import { PeriodsView } from './PeriodsView'

import { RouteComponentProps } from 'react-router'

import { GetGame, GetGame_Game } from './types/GetGame'


import styled from 'styled-components'

import Layout, { FixedStyles, FoundationStyles, BreadthStyles } from '../Layout'
import { useSubscribedCollection, useSubscribedItem } from '../useSubscription';
import { SubGame } from './types/SubGame';
import { GameViewGame } from './types/GameViewGame';
const Control = styled(NavView)`${FixedStyles}`
const Overview = styled(OverviewView)`${FoundationStyles}`
const Periods = styled(PeriodsView)`${BreadthStyles}`

export const GameView: React.SFC<{game: GetGame_Game}> = ({game}) =>
  <Layout>
    <Control {...{game}}/>
    <Overview {...{game}}/>
    <Periods {...{periods: game.periods || []}}/>
  </Layout>

const GAME_VIEW_GAME = gql`
  fragment GameViewGame on Game {
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
`

const GET_GAME = gql`
  query GetGame($id: ID) {
    Game(id: $id) {
      ...GameViewGame
    }
  }
  ${GAME_VIEW_GAME}
`

const SUB_GAME = gql`
  subscription SubGame {
    Game {
      mutation
      node {
        ...GameViewGame
      }
      updatedFields
      previousValues {
        id
      }
    }
  }
  ${GAME_VIEW_GAME}
`

// export const GameRoute: React.SFC<RouteComponentProps<{id: string}>> = ({match: { params: { id }}}) => {
//   console.log('id', id)
//   const { data, error } = useQuery<GetGame>(GET_GAME, { variables: { id }})
//   if (error || !data || !data.Game) { console.log(error); console.log(data); return <div>Error!</div> }
//   console.log('game', data.Game)
//   return <GameView {...{game: data.Game}}/>
// }

export const GameRoute: React.SFC<RouteComponentProps<{id: string}>> = ({match: { params: { id }}}) => {
  console.log('id', id)
  // const { data, error } = useQuery<GetGame>(GET_GAME, { variables: { id }})
  const game = useSubscribedItem<GetGame, SubGame, GameViewGame, {id: string}>(
    GET_GAME,
    SUB_GAME,
    ({data}) => data.Game,
    ({data}) => data.Game,
    (newGame) => ({Game: newGame}),
    { variables: { id } }
  )
  // const game = useSubscribedCollection(
  //   GET_GAME,
  //   SUB_GAME,

  // )
  // if (error || !data || !data.Game) { console.log(error); console.log(data); return <div>Error!</div> }
  console.log('game', game)
  return <GameView {...{game}}/>
}
