/* tslint:disable */
// This file was automatically generated and should not be edited.

import { _ModelMutationType } from "./../../types/globalTypes";

// ====================================================
// GraphQL subscription operation: SubGame
// ====================================================

export interface SubGame_Game_node {
  __typename: "Game";
  id: string;
  bigPicture: string;
}

export interface SubGame_Game_previousValues {
  __typename: "GamePreviousValues";
  id: string;
}

export interface SubGame_Game {
  __typename: "GameSubscriptionPayload";
  mutation: _ModelMutationType;
  node: SubGame_Game_node | null;
  updatedFields: string[] | null;
  previousValues: SubGame_Game_previousValues | null;
}

export interface SubGame {
  Game: SubGame_Game | null;
}
