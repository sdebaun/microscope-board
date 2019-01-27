/* tslint:disable */
// This file was automatically generated and should not be edited.

import { Tone } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetGame
// ====================================================

export interface GetGame_Game_currentFocus {
  __typename: "Focus";
  id: string;
}

export interface GetGame_Game_palette {
  __typename: "Palette";
  id: string;
}

export interface GetGame_Game_legacies {
  __typename: "Legacy";
  id: string;
}

export interface GetGame_Game_focii {
  __typename: "Focus";
  id: string;
  title: string;
}

export interface GetGame_Game_periods_events_scenes {
  __typename: "Scene";
  id: string;
  tone: Tone;
  question: string;
  seq: number;
}

export interface GetGame_Game_periods_events {
  __typename: "Event";
  id: string;
  tone: Tone;
  title: string;
  seq: number;
  scenes: GetGame_Game_periods_events_scenes[] | null;
}

export interface GetGame_Game_periods {
  __typename: "Period";
  id: string;
  tone: Tone;
  title: string;
  seq: number;
  events: GetGame_Game_periods_events[] | null;
}

export interface GetGame_Game {
  __typename: "Game";
  id: string;
  bigPicture: string;
  currentFocus: GetGame_Game_currentFocus | null;
  palette: GetGame_Game_palette | null;
  legacies: GetGame_Game_legacies[] | null;
  focii: GetGame_Game_focii[] | null;
  periods: GetGame_Game_periods[] | null;
}

export interface GetGame {
  Game: GetGame_Game | null;
}

export interface GetGameVariables {
  id?: string | null;
}
