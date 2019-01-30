import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from 'App/Theme'
import { GetGame_Game_periods_events, GetGame_Game_periods_events_scenes } from '../../../types/GetGame';
import { Tone } from 'App/types/globalTypes';
import { useToggle } from 'App/lib/useToggle';

// placeholders from material-ui
const Paper = styled.div``
const Grow = styled.div``

// const useToggle = (initialState: boolean): [boolean, (...args: any[])=>void] => {
//   const [state, setState] = useState(initialState)
//   const toggleState = () => setState(!state)
//   return [state, toggleState]
// }

const sceneView: React.SFC<{scene: GetGame_Game_periods_events_scenes, className?: string}> = ({scene: { question, id }, className}) => {
  const [zoom, toggleZoom] = useToggle(false)

  return <div {...{className}}>
    <a onClick={toggleZoom} style={{display: 'block'}}>
    {question}
    </a>
    { zoom && <Grow><div>Focus Scene</div></Grow>}
  </div>
}

const SceneView = styled(sceneView)`
  display: block;
  border-right: 0.75em solid ${(props: {scene: {tone: Tone}}) => props.scene.tone === Tone.LIGHT ? 'white' : 'black'};
  font-style: italic;
  cursor: pointer;
  color: ${colors.top.sec};
  background-color: ${colors.top.bg};
  margin: 0.5em -0.5em 0em -0.25em;
  padding: 0.25em;
`

const scenesView: React.SFC<{scenes: GetGame_Game_periods_events_scenes[], className?: string}> = ({scenes, className}) =>
  <div {...{className}}>
    {scenes.map((scene, key) => <SceneView {...{scene, key}}/>)}
  </div>

const ScenesView = styled(scenesView)``

const eventFocus: React.SFC<{className?: string}> = ({className}) =>
  <Grow>
    <div {...{className}}>Focus Event</div>
  </Grow>

const EventFocus = styled(eventFocus)`
  padding: 0.5em 0 0 0;
  color: ${colors.high.pri};
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
`

const eventView: React.SFC<{event: GetGame_Game_periods_events, className?: string}> = ({event: { title, scenes, id }, className}) => {
  const [zoom, toggleZoom] = useToggle(false)

  return <Paper {...{className}}>
    <a onClick={() => toggleZoom()} style={{display: 'block'}}>
      {name}
    </a>
    { zoom && <EventFocus/>}
    {scenes && scenes.length > 0 ? <ScenesView {...{scenes}}/> : ''}
  </Paper>
}

export const EventView = styled(eventView)`
  padding: 0.5em;
  margin-bottom: 0.5em;
  cursor: pointer;
  border-left: 0.5em solid ${(props: {event: {tone: Tone}}) => props.event.tone === Tone.LIGHT ? 'white' : 'black'}
  &&, && * { color: ${colors.high.pri}}
  &&, && .focus { background-color: ${colors.high.bg}; }
  &&:hover {
    box-shadow: 3px 3px 3px white;
  }
  transition: margin 3s ease-in;
`
