/* tslint:disable */
// This file was automatically generated and should not be edited.

import { Tone } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: GameViewGame
// ====================================================

export interface GameViewGame_currentFocus {
  __typename: "Focus";
  id: string;
}

export interface GameViewGame_palette {
  __typename: "Palette";
  id: string;
}

export interface GameViewGame_legacies {
  __typename: "Legacy";
  id: string;
}

export interface GameViewGame_focii {
  __typename: "Focus";
  id: string;
  title: string;
}

export interface GameViewGame_periods_events_scenes {
  __typename: "Scene";
  id: string;
  tone: Tone;
  question: string;
  seq: number;
}

export interface GameViewGame_periods_events {
  __typename: "Event";
  id: string;
  tone: Tone;
  title: string;
  seq: number;
  scenes: GameViewGame_periods_events_scenes[] | null;
}

export interface GameViewGame_periods {
  __typename: "Period";
  id: string;
  tone: Tone;
  title: string;
  seq: number;
  events: GameViewGame_periods_events[] | null;
}

export interface GameViewGame {
  __typename: "Game";
  id: string;
  bigPicture: string;
  currentFocus: GameViewGame_currentFocus | null;
  palette: GameViewGame_palette | null;
  legacies: GameViewGame_legacies[] | null;
  focii: GameViewGame_focii[] | null;
  periods: GameViewGame_periods[] | null;
}
