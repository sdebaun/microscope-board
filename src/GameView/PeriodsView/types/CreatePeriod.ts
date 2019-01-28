/* tslint:disable */
// This file was automatically generated and should not be edited.

import { Tone } from "./../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CreatePeriod
// ====================================================

export interface CreatePeriod_createPeriod {
  __typename: "Period";
  id: string;
}

export interface CreatePeriod {
  createPeriod: CreatePeriod_createPeriod | null;
}

export interface CreatePeriodVariables {
  seq: number;
  gameId: string;
  title: string;
  creatorId: string;
  tone: Tone;
}
