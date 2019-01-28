/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateGame
// ====================================================

export interface CreateGame_createGame {
  __typename: "Game";
  id: string;
}

export interface CreateGame {
  createGame: CreateGame_createGame | null;
}

export interface CreateGameVariables {
  bigPicture: string;
}
