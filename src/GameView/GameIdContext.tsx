import { createContext, useContext } from 'react'

const GameIdContext = createContext<string | null>(null)

export const GameIdProvider = GameIdContext.Provider

export const GameIdConsumer = GameIdContext.Consumer

export const useGameId = () => useContext(GameIdContext)
