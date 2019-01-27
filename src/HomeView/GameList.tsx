import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { CircularProgress, Button } from '@material-ui/core'
import { AllGames, AllGames_allGames } from './types/AllGames'
import { AddGame } from './AddGame';

const ALL_GAMES = gql`
  query AllGames {
    allGames {
      id,
      bigPicture,
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
  const { data, error } = useQuery<AllGames>(ALL_GAMES)
  if ( error || !data ) { return <div>Error!</div>}
  if (data.allGames.length == 0) { return <div>You have no games!</div>}
  return <>
    {data.allGames.map((game) => <GameItem {...{key: game.id, game}}/>)}
  </>
}