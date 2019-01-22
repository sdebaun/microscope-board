import React from 'react'
import { Game } from '../data'

import styled from 'styled-components'

import Layout, { FixedStyles, FoundationStyles, BreadthStyles, ExtraStyles } from '../Layout'

import { User } from './User'

// TODO: im pretty sure theres a better way to do this, more idiomatic to styled-components
const Fixed = styled.div`${FixedStyles}`
const Foundation = styled(User)`${FoundationStyles}`
const Breadth = styled.div`${BreadthStyles}`
const Extra = styled.div`${ExtraStyles}`

export const HomeView: React.SFC<{game: Game}> = ({game}) =>
  <Layout>
    <Fixed><div>Microscope Board</div></Fixed>
    <Foundation/>
    <Breadth/>
  </Layout>
