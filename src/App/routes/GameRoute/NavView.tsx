import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import MenuIcon from '@material-ui/icons/Menu'
import { GetGame_Game } from './types/GetGame'

export const NavView: React.SFC<{game: GetGame_Game}> = ({game: {id}}) =>
  <>
    <Link to='/'><ArrowBackIosIcon/></Link>
    <div><MenuIcon/></div>
  </>
