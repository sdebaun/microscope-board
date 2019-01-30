import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { Button } from 'semantic-ui-react'

import { useTouchGame } from '../useTouchGame';

const PanelTop = styled.div`
  background-color: #666
`

const PanelContent = styled.div`
  padding-top: 1em;
`

type AddPeriodValues = {
  title: string
}

const AddPeriodForm: React.SFC<{onSubmit: (values: AddPeriodValues) => Promise<any>}> = ({onSubmit}) =>
  <Formik<AddPeriodValues>
    onSubmit={(values, {setSubmitting, resetForm}) => {
      console.log('form', values)
      onSubmit(values).then(() => {setSubmitting(false); resetForm()})
    }}
    initialValues={{title: ''}}
    >
    {({values, handleChange, handleBlur, handleSubmit, submitForm}) => (
      <form onSubmit={handleSubmit}>
          <label htmlFor='title'>
            Title
          </label>
          <input id='title' type='text' placeholder='Describe the Period.'
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            />
          <Button>Create</Button>
      </form>
    )}
  </Formik>

const CREATE_PERIOD = gql`
  mutation CreatePeriod(
    $seq: Int!
    $gameId: ID!
    $title: String!
    $creatorId: ID!
    $tone: Tone!
  ) {
    createPeriod(
      seq: $seq
      gameId: $gameId
      title: $title
      creatorId: $creatorId
      tone: $tone
    ) {
      id
    }
  }
`

export const AddPeriod: React.SFC<{seq: number, gameId: string}> = ({seq, gameId}) => {
  const createPeriod = useMutation(CREATE_PERIOD)
  const touchGame = useTouchGame()
  const onSubmit = async (values: AddPeriodValues) => {
    console.log('submit', values)
    return createPeriod({variables: {
      gameId,
      seq,
      creatorId: "cjrfcd115amje01169ghfbrmp",
      tone: "LIGHT",
      ...values
      }
    }).then(() => touchGame())
  }
  return (
    <div>
    <PanelTop>New Period</PanelTop>
    <PanelContent>
      <AddPeriodForm {...{onSubmit}}/>
    </PanelContent>
  </div>
  )
}
