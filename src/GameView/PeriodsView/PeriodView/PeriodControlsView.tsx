import React from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

import { Tone } from 'types/globalTypes';

type InjectedProps = {
  addPeriod: () => void
}
type MutationProps = {
  beforeSeq: number
  children(props: InjectedProps): JSX.Element
}

const MutationAddPeriod: React.SFC<MutationProps> = ({beforeSeq, children}) =>
  <>{children({addPeriod: () => { console.log('add child before', beforeSeq)}})}</>

const periodControlsView: React.SFC<{tone: string, seq: number, className?: string}> = ({tone, seq, className}) =>
  <div {...{className}}>
    <MutationAddPeriod beforeSeq={seq}>
      {({addPeriod}) => <Button onClick={addPeriod}>&lt; +</Button> }
    </MutationAddPeriod>
  </div>

export const PeriodControlsView = styled(periodControlsView)`
  background-color: ${(props: {tone: Tone}) => props.tone === Tone.LIGHT ? 'white' : 'black'}
`
