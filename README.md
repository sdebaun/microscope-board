# Todo

[] set up graphcool
[] connect to graphcool with apollo
[] create ts typings from graphcool types
[X] styling scene on event card


design A

react router updates apollo-link-state

const gameRoute = ({id}) =>
  <Mutation>
  {({updateId}) => {
    updateId(id);
    return <GameView>
  }
  </Mutation>

design B

react context

const GameUiContext = React.createContext('gameUi')
export const GameUIProvider = GameUiContext.Provider
export const GameUIConsumer = GameUiContext.Consumer

const gameRoute = ({id}) =>
  <GameUIContext.Provider value={{id}}>
    <GameQuery id={id}>
      {({game}) => <GameView {...{game}}/>}
    </GameQuery>
  </GameUIContext.Provider>

const AddPeriodLink = ({beforeSeq}) =>
  <Mutation>
    {({addPeriod}) =>
      <GameUIContext.Consumer>
        {({id}) => addPeriod({gameId: id, seq: beforeSeq})}
      </GameUIContext.Consumer>
    }
  </Mutation>
