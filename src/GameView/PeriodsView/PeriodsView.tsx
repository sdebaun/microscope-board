import React from 'react'
// import { Period } from '../../data'
import { GetGame_Game_periods } from '../types/GetGame'
import { PeriodView } from './PeriodView'
import styled from 'styled-components'

import media from '../../media'

const periodsView: React.SFC<{periods: GetGame_Game_periods[], className?: string}> = ({periods, className}) =>
  <div {...{className}} onScroll={e => console.log('scrolled', e.currentTarget.scrollLeft, e.currentTarget.scrollWidth, e.currentTarget.clientWidth)}>
    {periods.map((period, key) => <PeriodView {...{period, key}}/>)}
  </div>

export const PeriodsView = styled(periodsView)`
  padding-top: 0px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 10px;
  grid-auto-flow: column;
  overflow-x: scroll;
  height: 100vh;
  grid-auto-columns: 240px;
  &:after, &:before {
    content: "";
    width: 10px;
  };
  ${media.small} {
    grid-auto-columns: calc(100% - 50px);
  };
  ${media.large} {
    grid-auto-columns: 240px;
  };
`
