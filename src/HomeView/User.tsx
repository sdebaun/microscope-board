import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import { CircularProgress } from '@material-ui/core'

const GET_GAMES = gql`
  query AllGames {
    allGames {
      id,
      bigPicture,
    }
  }
`

const GameLink: React.SFC<{game: any}> = ({game: {id, bigPicture}}) =>
  <Link to={`/game/${id}`}>{bigPicture}</Link>

const GameList: React.SFC = () => {
  const { data } = useQuery(GET_GAMES)

  return <>
    {data.allGames.map((game:any) => <GameLink {...{key: game.id, game}}/>)}
  </>
}

export const User: React.SFC<{className?: string}> = ({className}) =>
  <div {...{className}}>
    <h1>The User</h1>
    <Suspense fallback={<CircularProgress color='secondary'/>}>
      <GameList/>
    </Suspense>
  </div>