/* tslint:disable */
// This file was automatically generated and should not be edited.

import { _ModelMutationType, Tone } from "./../../types/globalTypes";

// ====================================================
// GraphQL subscription operation: SubGame
// ====================================================

export interface SubGame_Game_node_currentFocus {
  __typename: "Focus";
  id: string;
}

export interface SubGame_Game_node_palette {
  __typename: "Palette";
  id: string;
}

export interface SubGame_Game_node_legacies {
  __typename: "Legacy";
  id: string;
}

export interface SubGame_Game_node_focii {
  __typename: "Focus";
  id: string;
  title: string;
}

export interface SubGame_Game_node_periods_events_scenes {
  __typename: "Scene";
  id: string;
  tone: Tone;
  question: string;
  seq: number;
}

export interface SubGame_Game_node_periods_events {
  __typename: "Event";
  id: string;
  tone: Tone;
  title: string;
  seq: number;
  scenes: SubGame_Game_node_periods_events_scenes[] | null;
}

export interface SubGame_Game_node_periods {
  __typename: "Period";
  id: string;
  tone: Tone;
  title: string;
  seq: number;
  events: SubGame_Game_node_periods_events[] | null;
}

export interface SubGame_Game_node {
  __typename: "Game";
  id: string;
  bigPicture: string;
  currentFocus: SubGame_Game_node_currentFocus | null;
  palette: SubGame_Game_node_palette | null;
  legacies: SubGame_Game_node_legacies[] | null;
  focii: SubGame_Game_node_focii[] | null;
  periods: SubGame_Game_node_periods[] | null;
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
