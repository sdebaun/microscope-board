import React, { useState } from 'react'
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import { Formik } from 'formik';

import { CreateGame } from './types/CreateGame'

import { Button, Transition, Segment } from 'semantic-ui-react'
import { history } from 'App/history';

type AddGameValues = {
  bigPicture: string
}

// const CREATE_GAME = gql`
//   mutation CreateGame(
//     $bigPicture: String!
//   ) {
//     createGame(
//       ownerId: "cjrfcd115amje01169ghfbrmp"
//       bigPicture: $bigPicture
//     ) {
//       id
//     }
//   }
// `

import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createGame as createGameGQL } from 'App/API/graphql/mutations'
import { GraphQLResult } from '@aws-amplify/api/lib/types';
// import { DocumentNode } from 'graphql';

const makeHandler = (gql: string) =>
  async (input: any) =>
    (API.graphql(graphqlOperation(gql, {input})) as Promise<GraphQLResult>)
      .then(data => { console.log(data); return data })

import { unstable_createResource as createResource } from 'react-cache'

const UserResource = createResource(() => Auth.currentAuthenticatedUser().then(d => { console.log(d); return d }))

const AddGameForm: React.SFC<{cancel: ()=>void, complete: (id: string)=>void}> = ({cancel, complete}) => {
  const createGame = makeHandler(createGameGQL)
  const currentUser = UserResource.read()
  console.log(currentUser)
  return (
  <Formik<AddGameValues>
      initialValues={{bigPicture: ''}}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log('values', values)
        createGame(values).then((result: any) => {
          setSubmitting(false)
          console.log('result', result)
          resetForm()
          if (result.data && result.data.createGame) {
            complete(result.data.createGame.id)
          }
        })
      }}
      >
      {({values, handleChange, handleBlur, handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor='bigPicture'>
            Big Picture
          </label>
          <input id='bigPicture' type='text' placeholder='Whats the big picture?'
            value={values.bigPicture}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            <Button.Group widths={2}>
              <Button fluid primary type='submit'>OK</Button>
              <Button fluid secondary type='button' onClick={cancel}>Cancel</Button>
            </Button.Group>
        </form>
      )}
    </Formik>
  )
}

export const AddGame: React.SFC = () => {
  const [adding, setAdding] = useState(false)
  const cancel = () => setAdding(false)
  // const complete = (id: string) => history.push(`/game/${id}`)
  const complete = (id: string) => {}

  return (
    <>
    <Transition.Group animation='slide right' duration={250}>
    </Transition.Group>
    <Transition.Group animation='slide right' duration={250}>
      { !adding && <Button fluid onClick={() => setAdding(true)}>Add Game</Button> }
      { adding && <Segment><AddGameForm {...{cancel, complete}}/></Segment> }
    </Transition.Group>
    </>
  )
}