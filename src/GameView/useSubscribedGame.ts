
import gql from 'graphql-tag'

import { GetGame } from './types/GetGame'

import { useSubscribedItem } from '../useSubscription';
import { SubGame } from './types/SubGame';
import { GameViewGame } from './types/GameViewGame';

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

export const useSubscribedGame = (id: string) => useSubscribedItem<GetGame, SubGame, GameViewGame, {id: string}>(
  GET_GAME,
  SUB_GAME,
  ({data: { Game }}) => Game,
  ({data: { Game }}) => Game,
  (Game) => ({Game}),
  { variables: { id } }
)
