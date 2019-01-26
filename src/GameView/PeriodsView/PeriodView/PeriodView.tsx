import React from 'react'
import { Button, Paper, Collapse, Grow, WithStyles, withStyles, createStyles, Theme, Grid } from '@material-ui/core'
import { Period, Event, Scene, Tone } from '../../../data'
import styled from 'styled-components'
import colors from '../../../colors'
import { Link, Route } from 'react-router-dom'

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

import { PeriodControlsView } from './PeriodControlsView'

const periodView: React.SFC<{period: Period, className?: string}> = ({period: {name, events, tone, seq}, className}) =>
  <div {...{className}}>
    <PeriodControlsView {...{tone, seq}}/>
    <PeriodName {...{tone}}>{name}</PeriodName>
    {events.map((event, key) => <EventView {...{event, key}}/>)}
  </div>

export const PeriodView = styled(periodView)`
  // border-top: 0.5em solid ${(props: {period: {tone: Tone}}) => props.period.tone === Tone.LIGHT ? 'white' : 'black'}
`
