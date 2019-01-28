import React from 'react'

import { Container, Header, Overview, Content } from 'App/Layout'

import { User } from './User'

export const HomeRoute: React.SFC = () =>
  <Container>
    <Header><div>Microscope Board</div></Header>
    <Overview><User/></Overview>
    <Content>No content yet</Content>>
  </Container>
