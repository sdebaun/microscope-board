import styled from 'styled-components'
import { colors, media } from 'App/Theme'

export const Container = styled.div`
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

export const Header = styled.div`
  grid-area: navigation;
  background-color: ${colors.bar.bg};
  color: ${colors.bar.pri};
  & * {
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

export const Overview = styled.div`
  grid-area: overview;
  padding: 0.5em;
  background-color: ${colors.bot.bg};
  color: ${colors.bot.pri};
  & > * {
    color: ${colors.bot.pri};
  }
`

export const Content = styled.div`
  grid-area: content;
  background-color: ${colors.low.bg};
  color: ${colors.low.pri};
`

export const ScrollingContent = styled(Content)`
  overflow-x: scroll;
  height: 100vh;
`