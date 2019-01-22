import React from 'react'

import styled from 'styled-components'
import colors from './colors'
import media from './media'

const Layout = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  ${media.small} {
    grid-template-columns: 1fr;
    grid-template-rows: 3em auto auto 1fr;
    grid-template-areas:
      "navigation"
      "overview"
      "detail"
      "content"
      ;
  };
  ${media.large} {
    min-height: 100vh;
    grid-template-columns: 300px 1fr auto;
    grid-template-rows: 3em 1fr;
    grid-template-areas:
      "navigation content detail"
      "overview content detail"
      ;
  }
`

export const FixedStyles = `
  grid-area: navigation;
  background-color: ${colors.bar.bg};
  color: ${colors.bar.pri};
  & > * {
    color: ${colors.bar.pri};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75em;
  & > * {
    padding: 0.75em 1.25em;
    flex: 0;
    color: ${colors.bot.pri};
    font-weight: bold;
    text-decoration: none;
  }

`

export const FoundationStyles = `
  grid-area: overview;
  padding: 0.5em;
  background-color: ${colors.bot.bg};
  color: ${colors.bot.pri};
  & > * {
    color: ${colors.bot.pri};
  }
`

export const BreadthStyles = `
  grid-area: content;
  background-color: ${colors.low.bg};
  color: ${colors.low.pri};
`

export const ExtraStyles = `
  grid-area: detail
  min-width: 300px
  padding: 0.5em;
  background-color: ${colors.bot.bg};
  color: ${colors.bot.pri};
  &:empty {
    min-width: 0;
    width: 0;
    margin: 0;
    padding: 0;
  }
`

export default Layout;