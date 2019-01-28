import React from 'react'

import gql from 'graphql-tag'

import { NavView } from './NavView'
import { OverviewView } from './OverviewView'
import { PeriodsView } from './PeriodsView'

import { RouteComponentProps } from 'react-router'

import { GetGame, GetGame_Game } from './types/GetGame'

import { useSubscribedItem } from '../useSubscription';
import { SubGame } from './types/SubGame';
import { GameViewGame } from './types/GameViewGame';
import { GameIdProvider } from './GameIdContext';

import { Container, Header, Overview, ScrollingContent } from '../Layout'
import { useSubscribedGame } from './useSubscribedGame';

export const GameView: React.SFC<{game: GetGame_Game}> = ({game}) => {
  // const game = useSubscribedGame(id)

  return (
    <Container>
      <Header><NavView {...{game}}/></Header>
      <Overview><OverviewView {...{game}}/></Overview>
      <ScrollingContent><PeriodsView {...{game}}/></ScrollingContent>
    </Container>
  )
}

export const GameRoute: React.SFC<RouteComponentProps<{id: string}>> = ({match: { params: { id }}}) => {
  const game = useSubscribedGame(id)
  // const game = useSubscribedItem<GetGame, SubGame, GameViewGame, {id: string}>(
  //   GET_GAME,
  //   SUB_GAME,
  //   ({data: { Game }}) => Game,
  //   ({data: { Game }}) => Game,
  //   (Game) => ({Game}),
  //   { variables: { id } }
  // )
  return (
    <Container>
      <Header><NavView {...{game}}/></Header>
      <Overview><OverviewView {...{game}}/></Overview>
      <ScrollingContent><PeriodsView {...{game}}/></ScrollingContent>
    </Container>
  )
}

// const GAME_VIEW_GAME = gql`
//   fragment GameViewGame on Game {
//     id
//     bigPicture
//     currentFocus {
//       id
//     }
//     palette {
//       id
//     }
//     legacies {
//       id
//     }
//     focii {
//       id
//       title
//     }
//     periods {
//       id
//       tone
//       title
//       seq
//       events {
//         id
//         tone
//         title
//         seq
//         scenes {
//           id
//           tone
//           question
//           seq
//         }
//       }
//     }
//   }
// `

// const GET_GAME = gql`
//   query GetGame($id: ID) {
//     Game(id: $id) {
//       ...GameViewGame
//     }
//   }
//   ${GAME_VIEW_GAME}
// `

// const SUB_GAME = gql`
//   subscription SubGame {
//     Game {
//       mutation
//       node {
//         ...GameViewGame
//       }
//       updatedFields
//       previousValues {
//         id
//       }
//     }
//   }
//   ${GAME_VIEW_GAME}
// `
