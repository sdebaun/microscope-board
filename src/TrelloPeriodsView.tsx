///<reference path="./index.d.ts" />
import React from 'react'
import { Paper, WithStyles, withStyles, createStyles, Theme, Grid } from '@material-ui/core'
import { Period, Event } from './data'
import { createGenerateClassName } from 'jss';

import ReactTrello from 'react-trello';

// const styles = (theme: Theme) => ({
//   root: {
//     'grid-area': 'content',
//     'padding-top': '10px',
//     'display': 'grid',
//     'grid-gap': '10px',
//     'grid-template-columns': '10px',
//     'grid-auto-flow': 'column',
//     // 'width': '100%',
//     'overflow-x': 'scroll',
//     'overflow-y': 'hidden',
//     [theme.breakpoints.up('sm')]: {
//       // 'grid-auto-columns': 'calc(50% - 10px * 2)',
//       'grid-auto-columns': 'calc(240px)',
//     },
//     [theme.breakpoints.down('xs')]: {
//       'grid-auto-columns': 'calc(100% - 50px)'
//     },
//     '&:after, &:before': {
//       content: '""',
//       width: '10px',
//     },
//   },
// })

const dataFromPeriods = (periods: Period[]) => ({
  lanes: periods.map(({seq, name, events}) => ({
    id: seq.toString(),
    title: name,
    style: {backgroundColor: '#EEE', border: '1px solid #DDD'},
    cards: events.map(({seq, name, scenes}) => ({
      id: seq.toString(),
      title: name,
      name,
      scenes,
    }))
  }))
})


const EventCard: React.SFC<any> = ({name, scenes}) =>
  <Paper>
    <h4>{name}</h4>
    {scenes.map((scene: any, key: string) => <div {...{key}}>{scene.title}</div>)}
    <button>Add Scene</button>
  </Paper>

const PeriodsView: React.SFC<{periods: Period[]}> = ({periods}) =>
  <ReactTrello
    data={dataFromPeriods(periods)}
    draggable
    editable
    canAddLanes
    // customCardLayout
    style={{backgroundColor: '#EEE', height: 'auto', gridArea: 'content'}}
    onCardAdd={(card, laneId) => { console.log('added', card, laneId)}}
    // children={<EventCard/>}
    />


export default PeriodsView;