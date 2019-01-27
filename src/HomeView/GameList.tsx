import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Button } from '@material-ui/core'
import { AllGames, AllGames_allGames } from './types/AllGames'
import { useSubscription } from '../useSubscription';
import { SubGame } from './types/SubGame';
import { _ModelMutationType } from '../types/globalTypes';

const ALL_GAMES = gql`
  query AllGames {
    allGames {
      id
      bigPicture
    }
  }
`
const DELETE_GAME = gql`
  mutation DeleteGame($id: ID!) {
    deleteGame(id: $id) {
      id
    }
  }
`

const SUB_GAME = gql`
  subscription SubGame {
    Game {
      mutation
      node {
        id
        bigPicture
      }
      updatedFields
      previousValues {
        id
      }
    }
  }
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
export const GameList2: React.SFC<{games: AllGames_allGames[]}> = ({games}) => {
  if (games.length ==0) { return <div>You have no games!</div>}
  return (
    <>
      {games.map((game) => <GameItem {...{key: game.id, game}}/>)}
    </>
  )
}
export const GameState: React.SFC<{games: AllGames_allGames[]}> = ({games}) => {
  const [ state, setData ] = useState(games)
  useSubscription<SubGame>(SUB_GAME, {}, ({data}) => {
    console.log('sub fired', data)
    if (!data.Game) { return }
    if (data.Game.mutation == _ModelMutationType.CREATED && data.Game.node) {
      return setData([data.Game.node, ...state])
    }
    if (data.Game.mutation == _ModelMutationType.DELETED && data.Game.previousValues) {
      const deletedId = data.Game.previousValues.id
      return setData(state.filter(g => g.id !== deletedId))
    }
    if (data.Game.mutation == _ModelMutationType.UPDATED && data.Game.node) {
      const updateId = data.Game.node.id
      const newItem = data.Game.node
      const idx = state.findIndex(({id}) => id === updateId)
      state[idx] = data.Game.node
      return setData(state.map(g => g.id === updateId ? newItem : g))
    }
  })

  return <GameList2 {...{games: state}}/>
}

export const GameList: React.SFC = () => {
  const { data, error } = useQuery<AllGames>(ALL_GAMES)
  if ( error || !data ) { return <div>Error!</div>}
  return <GameState games={data.allGames}/>
}