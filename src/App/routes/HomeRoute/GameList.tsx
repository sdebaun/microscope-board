import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo-hooks'

import { useSubscribedCollection } from 'App/lib/useSubscription';
import { _ModelMutationType } from 'App/types/globalTypes';

import { AllGames, AllGames_allGames } from './types/AllGames'
import { GameListGame } from './types/GameListGame';
import { SubGames } from './types/SubGames';

import { Button } from '@material-ui/core'

const GAME_LIST_GAME = gql`
  fragment GameListGame on Game {
    id
    bigPicture
  }
`

const ALL_GAMES = gql`
  query AllGames {
    allGames {
      ...GameListGame
    }
  }
  ${GAME_LIST_GAME}
`
const DELETE_GAME = gql`
  mutation DeleteGame($id: ID!) {
    deleteGame(id: $id) {
      id
    }
  }
`

const SUB_GAMES = gql`
  subscription SubGames {
    Game {
      mutation
      node {
        ...GameListGame
      }
      updatedFields
      previousValues {
        id
      }
    }
  }
  ${GAME_LIST_GAME}
`

const GameLink: React.SFC<{game: AllGames_allGames}> = ({game: {id, bigPicture}}) =>
  <Link to={`/game/${id}`}>{bigPicture}</Link>

const GameItem: React.SFC<{game: AllGames_allGames}> = ({game}) => {
  const deleteGame = useMutation(DELETE_GAME)
  return (
    <div>
      <GameLink {...{game}}/>
      <Button variant="contained" onClick={() => deleteGame({variables: {id: game.id}})}>delete</Button>
    </div>
  )
}

export const GameList: React.SFC = () => {
  const games = useSubscribedCollection<AllGames, SubGames, GameListGame>(
    ALL_GAMES,
    SUB_GAMES,
    ({data: {allGames}}) => allGames,
    ({data: {Game}}) => Game,
    (allGames) => ({allGames}),
  )
  if (games.length == 0) { return <div>You have no games!</div>}
  return (
    <>
      {games.map((game) => <GameItem {...{key: game.id, game}}/>)}
    </>
  )
}
