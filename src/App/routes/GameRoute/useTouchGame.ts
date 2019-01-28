import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";

import { useGameId } from "./GameIdContext";

const TOUCH_GAME = gql`
  mutation TouchGame(
    $id: ID!
  ) {
    updateGame(
      id: $id
      touch: "touch"
    ) {
      id
    }
  }
`
export const useTouchGame = () => {
  const id = useGameId()
  return useMutation(TOUCH_GAME, { variables: { id }})
}
