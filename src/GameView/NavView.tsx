import React from 'react'
import { WithStyles, withStyles, createStyles, Theme, Grid } from '@material-ui/core'
import { Game } from '../data'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../colors'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import MenuIcon from '@material-ui/icons/Menu'

export const NavView: React.SFC<{game: Game, className?: string}> = ({game: {id}, className}) =>
  <div {...{className}}>
    <Link to='/'><ArrowBackIosIcon/></Link>
    <div><MenuIcon/></div>
  </div>
