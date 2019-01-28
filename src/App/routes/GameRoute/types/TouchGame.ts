/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TouchGame
// ====================================================

export interface TouchGame_updateGame {
  __typename: "Game";
  id: string;
}

export interface TouchGame {
  updateGame: TouchGame_updateGame | null;
}

export interface TouchGameVariables {
  id: string;
}
