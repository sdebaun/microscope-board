/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteGame
// ====================================================

export interface DeleteGame_deleteGame {
  __typename: "Game";
  id: string;
}

export interface DeleteGame {
  deleteGame: DeleteGame_deleteGame | null;
}

export interface DeleteGameVariables {
  id: string;
}
