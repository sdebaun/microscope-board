import React from 'react'
import { GetGame_Game_periods } from '../../types/GetGame'
import styled from 'styled-components'
import { colors } from 'App/Theme'
import { PeriodControlsView } from './PeriodControlsView'
import { Tone } from 'App/types/globalTypes';


import { EventView } from './EventView'
import { useMutation } from 'react-apollo-hooks';
import { Button } from 'semantic-ui-react'

import gql from 'graphql-tag';
import { useTouchGame } from '../../useTouchGame';

const PeriodName = styled.h1<{tone: Tone}>`
  font-size: 1.5em;
  color: ${colors.low.sec};
  padding: 0.25em;
  margin: 0;
`

const DELETE_PERIOD = gql`
  mutation DeletePeriod($id: ID!) {
    deletePeriod(id: $id) { id }
  }
`

const DeletePeriod: React.SFC<{id: string}> = ({id}) => {
  const deletePeriod = useMutation(DELETE_PERIOD, { variables: { id }})
  const touchGame = useTouchGame()

  return <Button onClick={() => deletePeriod().then(touchGame)}>Delete</Button>
}

const periodView: React.SFC<{period: GetGame_Game_periods, className?: string}> = ({period: {id, title, events, tone, seq}, className}) => {
  console.log('tone', tone)
  return <div {...{className}}>
    <PeriodControlsView {...{tone, seq}}/>
    <PeriodName {...{tone}}>{title}</PeriodName>
    <DeletePeriod {...{id}}/>
    {events && events.map((event, key) => <EventView {...{event, key}}/>)}
  </div>
}

export const PeriodView = styled(periodView)`
  // border-top: 0.5em solid ${(props: {period: {tone: Tone}}) => props.period.tone === Tone.LIGHT ? 'white' : 'black'}
`
