import React from 'react'
import { GetGame_Game_periods } from '../../types/GetGame'
import styled from 'styled-components'
import colors from '../../../colors'
import { PeriodControlsView } from './PeriodControlsView'
import { Tone } from '../../../types/globalTypes';


import { EventView } from './EventView'

const PeriodName = styled.h1<{tone: Tone}>`
  font-size: 1.5em;
  color: ${colors.low.sec};
  padding: 0.25em;
  margin: 0;
`


const ButtonBar = styled.div<{tone: Tone}>`
  background-color: ${(props: {tone: Tone}) => props.tone === Tone.LIGHT ? 'white' : 'black'}
`

const periodView: React.SFC<{period: GetGame_Game_periods, className?: string}> = ({period: {title, events, tone, seq}, className}) =>
  <div {...{className}}>
    <PeriodControlsView {...{tone, seq}}/>
    <PeriodName {...{tone}}>{title}</PeriodName>
    {events && events.map((event, key) => <EventView {...{event, key}}/>)}
  </div>

export const PeriodView = styled(periodView)`
  // border-top: 0.5em solid ${(props: {period: {tone: Tone}}) => props.period.tone === Tone.LIGHT ? 'white' : 'black'}
`
