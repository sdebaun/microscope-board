import React from 'react'
import { Game } from '../data'

import { Container, Header, Overview, Content } from '../Layout'

import { User } from './User'

export const HomeView: React.SFC<{game: Game}> = ({game}) =>
  <Container>
    <Header><div>Microscope Board</div></Header>
    <Overview><User/></Overview>
    <Content>No content yet</Content>>
  </Container>
