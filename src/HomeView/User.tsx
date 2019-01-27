import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import { CircularProgress } from '@material-ui/core'
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

const GameLink: React.SFC<{game: AllGames_allGames}> = ({game: {id, bigPicture}}) =>
  <Link to={`/game/${id}`}>{bigPicture}</Link>

const GameList: React.SFC = () => {
  const { data, error } = useQuery<AllGames>(ALL_GAMES)
  if ( error || !data ) { return <div>Error!</div>}
  if (data.allGames.length == 0) { return <div>You have no games!</div>}
  return <>
    {data.allGames.map((game) => <GameLink {...{key: game.id, game}}/>)}
  </>
}

export const User: React.SFC<{className?: string}> = ({className}) =>
  <div {...{className}}>
    <h1>The User</h1>
    <Suspense fallback={<CircularProgress color='secondary'/>}>
      <GameList/>
      <AddGame/>
    </Suspense>
  </div>