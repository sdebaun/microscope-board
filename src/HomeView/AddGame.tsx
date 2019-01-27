import React, { useState } from 'react'
import { Button, Grow } from '@material-ui/core';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

type FormikValues = {
  bigPicture: string
}

const CREATE_GAME = gql`
  mutation CreateGame(
    $bigPicture: String!
  ) {
    createGame(
      ownerId: "cjrfcd115amje01169ghfbrmp"
      bigPicture: $bigPicture
    ) {
      id
    }
  }
`

const AddGameForm: React.SFC = () => {
  const createGame = useMutation(CREATE_GAME)

  return (
    <Formik<FormikValues>
      initialValues={{bigPicture: ''}}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values', values)
        createGame({variables: values}).then(() => {
          setSubmitting(false)
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
        </form>
      )}
    </Formik>
  )
}


export const AddGame: React.SFC = () => {
  const [adding, setAdding] = useState(false)

  if (adding) { return (
    <Grow><>
        <AddGameForm />
        <Button variant='contained' onClick={() => setAdding(false)}>Cancel</Button>
    </></Grow>
  )}
  return (
    <div>
      <Button variant='contained' color='primary' onClick={() => setAdding(true)}>Add Game</Button>
    </div>
  )
}