import React from 'react'
import { Link } from 'react-router-dom'

import { GetGame_Game } from './types/GetGame'
import { Icon } from 'semantic-ui-react';

export const NavView: React.SFC<{game: GetGame_Game}> = ({game: {id}}) =>
  <>
    <Link to='/'><Icon size='big' name='angle left'/></Link>
    <div><Icon size='big' name='settings'/></div>
  </>
