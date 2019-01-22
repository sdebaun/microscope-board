import React from 'react'
import { Button, Paper, Collapse, Grow, WithStyles, withStyles, createStyles, Theme, Grid } from '@material-ui/core'
import { Period, Event, Scene, Tone } from '../../../data'
import styled from 'styled-components'
import colors from '../../../colors'
import { Link, Route } from 'react-router-dom'
// const UToneDot: React.SFC<{tone: Tone, className?: string}> = ({tone, className}) =>
//   <svg {...{className}} viewBox="-24 -24 48 48"><circle r="24" fill="red"/></svg>

// const ToneDot = styled(UToneDot)`
//   & circle {
//     fill: ${props => props.tone === Tone.LIGHT ? 'white' : 'black'};
//     stroke: ${props => props.tone === Tone.LIGHT ? 'black' : 'none'}
//   }
// `

// const sceneView: React.SFC<{scene: Scene, className?: string}> = ({scene: { question, id }, className}) =>
//   <Link to={`/game/1234/scene/${id}`} {...{className}}>
//     <div>{question}</div>
//     <Route path={`/game/1234/scene/${id}`} component={() => <Grow in={true}><div>Focus Scene</div></Grow>}/>
//   </Link>

// const SceneView = styled(sceneView)`
//   display: block;
//   border-right: 0.75em solid ${(props: {scene: {tone: Tone}}) => props.scene.tone === Tone.LIGHT ? 'white' : 'black'};
//   font-style: italic;
//   color: ${colors.top.sec};
//   background-color: ${colors.top.bg};
//   margin: 0.5em -0.5em 0em -0.25em;
//   padding: 0.25em;
// `

// const scenesView: React.SFC<{scenes: Scene[], className?: string}> = ({scenes, className}) =>
//   <div {...{className}}>
//     {scenes.map((scene, key) => <SceneView {...{scene, key}}/>)}
//   </div>

// const ScenesView = styled(scenesView)``

// const eventFocus: React.SFC<{className?: string}> = ({className}) =>
//   <Grow in={true}><div {...{className}}>Focus Event</div></Grow>

// const EventFocus = styled(eventFocus)`
//   padding: 0.5em 0 0 0;
//   color: ${colors.high.pri};
//   border-top-left-radius: 0.5em;
//   border-bottom-left-radius: 0.5em;
// `

// const eventView: React.SFC<{event: Event, className?: string}> = ({event: { name, scenes, id }, className}) =>
//   <Paper {...{className}}>
//     <Link to={`/game/1234/event/${id}`} style={{display: 'block'}}>
//       {name}
//     </Link>
//     <Route path={`/game/1234/event/${id}`} component={() => <EventFocus/>}/>
//     {scenes.length > 0 ? <ScenesView {...{scenes}}/> : ''}
//   </Paper>

// const EventView = styled(eventView)`
//   padding: 0.5em;
//   margin-bottom: 0.5em;
//   border-left: 0.5em solid ${(props: {event: {tone: Tone}}) => props.event.tone === Tone.LIGHT ? 'white' : 'black'}
//   &&, && * { color: ${colors.high.pri}}
//   &&, && .focus { background-color: ${colors.high.bg}; }
//   &&:hover {
//     box-shadow: 3px 3px 3px white;
//   }
//   transition: margin 3s ease-in;
// `

import { EventView } from './EventView'

const PeriodName = styled.h1<{tone: Tone}>`
  font-size: 1.5em;
  color: ${colors.low.sec};
  padding: 0.25em;
  margin: 0;
`

// const PeriodToneDot = styled(ToneDot)`
//   height: 24px;
//   width: 24px;
//   display: block;
//   margin: auto;
//   margin-bottom: 0.5em;
// `

const ButtonBar = styled.div<{tone: Tone}>`
  background-color: ${(props: {tone: Tone}) => props.tone === Tone.LIGHT ? 'white' : 'black'}
`

// const AddThingLink: React.SFC<{gameId: string}> = ({gameId, ...props}) => <Link {...props} to={`/game/${gameId}/add-period/>

const periodView: React.SFC<{period: Period, className?: string}> = ({period: {name, events, tone}, className}) =>
  <div {...{className}}>
    <ButtonBar {...{tone}}>
    {/* <Link as={Button} to='/game/123/add-period'>&lt; +</Link> */}
    {/* <Button component={() => <AddThingLink gameId={'123'}/>}>&lt; +</Button> */}
    <Button>&lt; +</Button>
    </ButtonBar>
    <PeriodName {...{tone}}>{name}</PeriodName>
    {events.map((event, key) => <EventView {...{event, key}}/>)}
  </div>

export const PeriodView = styled(periodView)`
  // border-top: 0.5em solid ${(props: {period: {tone: Tone}}) => props.period.tone === Tone.LIGHT ? 'white' : 'black'}
`
