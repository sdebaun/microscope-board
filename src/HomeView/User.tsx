import React from 'react'
import { Link } from 'react-router-dom'

export const User: React.SFC<{className?: string}> = ({className}) =>
  <div {...{className}}>
    <h1>The User</h1>
    <Link to='/game/1234'>Game 1234</Link>
  </div>