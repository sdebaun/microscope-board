import React from 'react'
import { GetGame_Game } from '../types/GetGame'
import { PeriodView } from './PeriodView'
import styled from 'styled-components'

import media from '../../media'
import { AddPeriod } from './AddPeriod'

const periodsView: React.SFC<{game: GetGame_Game, className?: string}> = ({game: { id, periods }, className}) => {
  return (
    <div {...{className}} onScroll={e => console.log('scrolled', e.currentTarget.scrollLeft, e.currentTarget.scrollWidth, e.currentTarget.clientWidth)}>
      {periods && periods.map((period, key) => <PeriodView {...{period, key}}/>)}
      <AddPeriod gameId={id} seq={periods ? periods.length : 0}/>
    </div>
  )
}

export const PeriodsView = styled(periodsView)`
  padding-top: 0px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 10px;
  grid-auto-flow: column;
  // overflow-x: scroll;
  // height: 100vh;
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
