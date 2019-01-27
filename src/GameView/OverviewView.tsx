import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import { GetGame_Game, GetGame_Game_palette, GetGame_Game_legacies, GetGame_Game_currentFocus } from './types/GetGame'
import styled from 'styled-components'
import colors from '../colors'

const OverviewPanelTitle = styled.h2`
  font-size: 0.9em;
  font-weight: bold;
  color: ${colors.high.sec}
`

const overviewPanel: React.SFC<{title: React.ReactNode, className?: string}> = ({title, children, className}) =>
  <ExpansionPanel {...{className}} classes={{expanded: 'panel-expanded'}}>
    <ExpansionPanelSummary classes={{root: 'summary-root'}}>
      <OverviewPanelTitle>{title}</OverviewPanelTitle>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails classes={{root: 'details-root'}}>
      {children}
    </ExpansionPanelDetails>
  </ExpansionPanel>

const OverviewPanel = styled(overviewPanel)`
  && {
    background-color: ${colors.high.bg};
    color: ${colors.high.pri};
    margin-bottom: 0.25em;
    border-radius: 0.25em;

    &.panel-expanded {
      margin: 0 0 0.25em 0;
    }

    && .summary-root {
      padding: 0 0.5em;
      min-height: 0;
      & > * {
        margin: 0;
      }
    }

    .details-root {
      padding: 0.5em;
      background-color: ${colors.top.bg};
      border-radius: 0.25em;
    }
  }
`

const PaletteView: React.SFC<{palette: GetGame_Game_palette | null}> = ({palette}) =>
  <OverviewPanel title='Palette'>
    List of palette choices
  </OverviewPanel>

const LegaciesView: React.SFC<{legacies: GetGame_Game_legacies[] | null}> = ({legacies}) =>
  <OverviewPanel title='Legacies'>
    List of legacies
  </OverviewPanel>

const BigPictureTitle = styled.h1`
  font-weight: normal;
  color: ${colors.bot.pri};
  padding: 0 0.25em;
  margin: 0 0 0.5em 0;
`

const ReverseOverviewPanel = styled(OverviewPanel)`
  &&& {
    background-color: ${colors.bot.bg};
    .summary-root {
      color: ${colors.bot.sec};
    }
    .details-root {
      background-color: ${colors.bot.bg};
      color: ${colors.bot.pri};
    }
  }
`

const CurrentFocusView: React.SFC<{currentFocus: GetGame_Game_currentFocus}> = ({currentFocus}) =>
  <ReverseOverviewPanel title='Current Focus'>
    {currentFocus.id}
  </ReverseOverviewPanel>

const overviewView: React.SFC<{game: GetGame_Game, className?: string}> = ({game: {bigPicture, palette, legacies, currentFocus}, className}) =>
  <div {...{className}}>
    <BigPictureTitle>{bigPicture}</BigPictureTitle>
    <PaletteView {...{palette}}/>
    <LegaciesView {...{legacies}}/>
    {currentFocus ? <CurrentFocusView {...{currentFocus}}/> : ''}
  </div>

export const OverviewView = styled(overviewView)`
  // padding: 0.5em;
`