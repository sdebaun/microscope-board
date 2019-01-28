/* tslint:disable */
// This file was automatically generated and should not be edited.

import { _ModelMutationType } from "./../../../../types/globalTypes";

// ====================================================
// GraphQL subscription operation: SubGames
// ====================================================

export interface SubGames_Game_node {
  __typename: "Game";
  id: string;
  bigPicture: string;
}

export interface SubGames_Game_previousValues {
  __typename: "GamePreviousValues";
  id: string;
}

export interface SubGames_Game {
  __typename: "GameSubscriptionPayload";
  mutation: _ModelMutationType;
  node: SubGames_Game_node | null;
  updatedFields: string[] | null;
  previousValues: SubGames_Game_previousValues | null;
}

export interface SubGames {
  Game: SubGames_Game | null;
}
