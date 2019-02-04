/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
};

export type UpdateUserInput = {
  id: string,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateGameInput = {
  id?: string | null,
  bigPicture: string,
  owner?: string | null,
  touch?: string | null,
  createdAt?: string | null,
  gamePaletteId?: string | null,
  gameCurrentFocusId?: string | null,
};

export type UpdateGameInput = {
  id: string,
  bigPicture?: string | null,
  owner?: string | null,
  touch?: string | null,
  createdAt?: string | null,
  gamePaletteId?: string | null,
  gameCurrentFocusId?: string | null,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type CreatePlayerInput = {
  id?: string | null,
  playerGameId: string,
};

export type UpdatePlayerInput = {
  id: string,
  playerGameId?: string | null,
};

export type DeletePlayerInput = {
  id?: string | null,
};

export type CreateChangeInput = {
  id?: string | null,
  createdAt?: string | null,
  changeGameId: string,
  changePlayerId: string,
};

export type UpdateChangeInput = {
  id: string,
  createdAt?: string | null,
  changeGameId?: string | null,
  changePlayerId?: string | null,
};

export type DeleteChangeInput = {
  id?: string | null,
};

export type CreatePaletteInput = {
  id?: string | null,
  paletteGameId: string,
};

export type UpdatePaletteInput = {
  id: string,
  paletteGameId?: string | null,
};

export type DeletePaletteInput = {
  id?: string | null,
};

export type CreatePaletteItemInput = {
  id?: string | null,
  title: string,
  paletteItemPaletteId: string,
  paletteItemYesPaletteId?: string | null,
  paletteItemNoPaletteId?: string | null,
};

export type UpdatePaletteItemInput = {
  id: string,
  title?: string | null,
  paletteItemPaletteId?: string | null,
  paletteItemYesPaletteId?: string | null,
  paletteItemNoPaletteId?: string | null,
};

export type DeletePaletteItemInput = {
  id?: string | null,
};

export type CreateLegacyInput = {
  id?: string | null,
  title: string,
  legacyGameId: string,
  legacyPlayerId: string,
};

export type UpdateLegacyInput = {
  id: string,
  title?: string | null,
  legacyGameId?: string | null,
  legacyPlayerId?: string | null,
};

export type DeleteLegacyInput = {
  id?: string | null,
};

export type CreatePeriodInput = {
  id?: string | null,
  tone: Tone,
  title: string,
  seq: number,
  periodGameId: string,
  periodCreatorId: string,
};

export enum Tone {
  LIGHT = "LIGHT",
  DARK = "DARK",
}


export type UpdatePeriodInput = {
  id: string,
  tone?: Tone | null,
  title?: string | null,
  seq?: number | null,
  periodGameId?: string | null,
  periodCreatorId?: string | null,
};

export type DeletePeriodInput = {
  id?: string | null,
};

export type CreateEventInput = {
  id?: string | null,
  tone: Tone,
  seq: number,
  title: string,
  eventPeriodId: string,
  eventCreatorId: string,
};

export type UpdateEventInput = {
  id: string,
  tone?: Tone | null,
  seq?: number | null,
  title?: string | null,
  eventPeriodId?: string | null,
  eventCreatorId?: string | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type CreateFocusInput = {
  id?: string | null,
  title: string,
  focusFocusedGameId?: string | null,
  focusGameId: string,
};

export type UpdateFocusInput = {
  id: string,
  title?: string | null,
  focusFocusedGameId?: string | null,
  focusGameId?: string | null,
};

export type DeleteFocusInput = {
  id?: string | null,
};

export type CreateSceneInput = {
  id?: string | null,
  tone: Tone,
  seq: number,
  question: string,
  setting: string,
  answer: string,
  sceneEventId: string,
  sceneCreatorId: string,
};

export type UpdateSceneInput = {
  id: string,
  tone?: Tone | null,
  seq?: number | null,
  question?: string | null,
  setting?: string | null,
  answer?: string | null,
  sceneEventId?: string | null,
  sceneCreatorId?: string | null,
};

export type DeleteSceneInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDFilterInput | null,
  bigPicture?: ModelStringFilterInput | null,
  owner?: ModelStringFilterInput | null,
  touch?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelChangeFilterInput = {
  id?: ModelIDFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  and?: Array< ModelChangeFilterInput | null > | null,
  or?: Array< ModelChangeFilterInput | null > | null,
  not?: ModelChangeFilterInput | null,
};

export type ModelPaletteFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelPaletteFilterInput | null > | null,
  or?: Array< ModelPaletteFilterInput | null > | null,
  not?: ModelPaletteFilterInput | null,
};

export type ModelPaletteItemFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  and?: Array< ModelPaletteItemFilterInput | null > | null,
  or?: Array< ModelPaletteItemFilterInput | null > | null,
  not?: ModelPaletteItemFilterInput | null,
};

export type ModelLegacyFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  and?: Array< ModelLegacyFilterInput | null > | null,
  or?: Array< ModelLegacyFilterInput | null > | null,
  not?: ModelLegacyFilterInput | null,
};

export type ModelPeriodFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  seq?: ModelIntFilterInput | null,
  and?: Array< ModelPeriodFilterInput | null > | null,
  or?: Array< ModelPeriodFilterInput | null > | null,
  not?: ModelPeriodFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDFilterInput | null,
  seq?: ModelIntFilterInput | null,
  title?: ModelStringFilterInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelFocusFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  and?: Array< ModelFocusFilterInput | null > | null,
  or?: Array< ModelFocusFilterInput | null > | null,
  not?: ModelFocusFilterInput | null,
};

export type ModelSceneFilterInput = {
  id?: ModelIDFilterInput | null,
  seq?: ModelIntFilterInput | null,
  question?: ModelStringFilterInput | null,
  setting?: ModelStringFilterInput | null,
  answer?: ModelStringFilterInput | null,
  and?: Array< ModelSceneFilterInput | null > | null,
  or?: Array< ModelSceneFilterInput | null > | null,
  not?: ModelSceneFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    bigPicture: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    palette:  {
      __typename: "Palette",
      id: string,
    } | null,
    legacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    periods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    currentFocus:  {
      __typename: "Focus",
      id: string,
      title: string,
    } | null,
    focii:  {
      __typename: "ModelFocusConnection",
      items:  Array< {
        __typename: "Focus",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    touch: string | null,
    changes:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    bigPicture: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    palette:  {
      __typename: "Palette",
      id: string,
    } | null,
    legacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    periods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    currentFocus:  {
      __typename: "Focus",
      id: string,
      title: string,
    } | null,
    focii:  {
      __typename: "ModelFocusConnection",
      items:  Array< {
        __typename: "Focus",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    touch: string | null,
    changes:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    bigPicture: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    palette:  {
      __typename: "Palette",
      id: string,
    } | null,
    legacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    periods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    currentFocus:  {
      __typename: "Focus",
      id: string,
      title: string,
    } | null,
    focii:  {
      __typename: "ModelFocusConnection",
      items:  Array< {
        __typename: "Focus",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    touch: string | null,
    changes:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
};

export type CreatePlayerMutation = {
  createPlayer:  {
    __typename: "Player",
    id: string,
    createdPeriods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdEvents:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdLegacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdScenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    createdChanges:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
};

export type UpdatePlayerMutation = {
  updatePlayer:  {
    __typename: "Player",
    id: string,
    createdPeriods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdEvents:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdLegacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdScenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    createdChanges:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
};

export type DeletePlayerMutation = {
  deletePlayer:  {
    __typename: "Player",
    id: string,
    createdPeriods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdEvents:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdLegacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdScenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    createdChanges:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateChangeMutationVariables = {
  input: CreateChangeInput,
};

export type CreateChangeMutation = {
  createChange:  {
    __typename: "Change",
    id: string,
    createdAt: string | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type UpdateChangeMutationVariables = {
  input: UpdateChangeInput,
};

export type UpdateChangeMutation = {
  updateChange:  {
    __typename: "Change",
    id: string,
    createdAt: string | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type DeleteChangeMutationVariables = {
  input: DeleteChangeInput,
};

export type DeleteChangeMutation = {
  deleteChange:  {
    __typename: "Change",
    id: string,
    createdAt: string | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type CreatePaletteMutationVariables = {
  input: CreatePaletteInput,
};

export type CreatePaletteMutation = {
  createPalette:  {
    __typename: "Palette",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    items:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    yesItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    noItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePaletteMutationVariables = {
  input: UpdatePaletteInput,
};

export type UpdatePaletteMutation = {
  updatePalette:  {
    __typename: "Palette",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    items:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    yesItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    noItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePaletteMutationVariables = {
  input: DeletePaletteInput,
};

export type DeletePaletteMutation = {
  deletePalette:  {
    __typename: "Palette",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    items:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    yesItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    noItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePaletteItemMutationVariables = {
  input: CreatePaletteItemInput,
};

export type CreatePaletteItemMutation = {
  createPaletteItem:  {
    __typename: "PaletteItem",
    id: string,
    title: string,
    palette:  {
      __typename: "Palette",
      id: string,
    },
    yesPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
    noPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
  } | null,
};

export type UpdatePaletteItemMutationVariables = {
  input: UpdatePaletteItemInput,
};

export type UpdatePaletteItemMutation = {
  updatePaletteItem:  {
    __typename: "PaletteItem",
    id: string,
    title: string,
    palette:  {
      __typename: "Palette",
      id: string,
    },
    yesPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
    noPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
  } | null,
};

export type DeletePaletteItemMutationVariables = {
  input: DeletePaletteItemInput,
};

export type DeletePaletteItemMutation = {
  deletePaletteItem:  {
    __typename: "PaletteItem",
    id: string,
    title: string,
    palette:  {
      __typename: "Palette",
      id: string,
    },
    yesPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
    noPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
  } | null,
};

export type CreateLegacyMutationVariables = {
  input: CreateLegacyInput,
};

export type CreateLegacyMutation = {
  createLegacy:  {
    __typename: "Legacy",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
    title: string,
  } | null,
};

export type UpdateLegacyMutationVariables = {
  input: UpdateLegacyInput,
};

export type UpdateLegacyMutation = {
  updateLegacy:  {
    __typename: "Legacy",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
    title: string,
  } | null,
};

export type DeleteLegacyMutationVariables = {
  input: DeleteLegacyInput,
};

export type DeleteLegacyMutation = {
  deleteLegacy:  {
    __typename: "Legacy",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
    title: string,
  } | null,
};

export type CreatePeriodMutationVariables = {
  input: CreatePeriodInput,
};

export type CreatePeriodMutation = {
  createPeriod:  {
    __typename: "Period",
    id: string,
    tone: Tone,
    title: string,
    seq: number,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type UpdatePeriodMutationVariables = {
  input: UpdatePeriodInput,
};

export type UpdatePeriodMutation = {
  updatePeriod:  {
    __typename: "Period",
    id: string,
    tone: Tone,
    title: string,
    seq: number,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type DeletePeriodMutationVariables = {
  input: DeletePeriodInput,
};

export type DeletePeriodMutation = {
  deletePeriod:  {
    __typename: "Period",
    id: string,
    tone: Tone,
    title: string,
    seq: number,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string,
    tone: Tone,
    seq: number,
    title: string,
    period:  {
      __typename: "Period",
      id: string,
      title: string,
      seq: number,
    },
    scenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string,
    tone: Tone,
    seq: number,
    title: string,
    period:  {
      __typename: "Period",
      id: string,
      title: string,
      seq: number,
    },
    scenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string,
    tone: Tone,
    seq: number,
    title: string,
    period:  {
      __typename: "Period",
      id: string,
      title: string,
      seq: number,
    },
    scenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type CreateFocusMutationVariables = {
  input: CreateFocusInput,
};

export type CreateFocusMutation = {
  createFocus:  {
    __typename: "Focus",
    id: string,
    title: string,
    focusedGame:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
  } | null,
};

export type UpdateFocusMutationVariables = {
  input: UpdateFocusInput,
};

export type UpdateFocusMutation = {
  updateFocus:  {
    __typename: "Focus",
    id: string,
    title: string,
    focusedGame:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
  } | null,
};

export type DeleteFocusMutationVariables = {
  input: DeleteFocusInput,
};

export type DeleteFocusMutation = {
  deleteFocus:  {
    __typename: "Focus",
    id: string,
    title: string,
    focusedGame:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
  } | null,
};

export type CreateSceneMutationVariables = {
  input: CreateSceneInput,
};

export type CreateSceneMutation = {
  createScene:  {
    __typename: "Scene",
    id: string,
    tone: Tone,
    seq: number,
    question: string,
    setting: string,
    answer: string,
    event:  {
      __typename: "Event",
      id: string,
      seq: number,
      title: string,
    },
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type UpdateSceneMutationVariables = {
  input: UpdateSceneInput,
};

export type UpdateSceneMutation = {
  updateScene:  {
    __typename: "Scene",
    id: string,
    tone: Tone,
    seq: number,
    question: string,
    setting: string,
    answer: string,
    event:  {
      __typename: "Event",
      id: string,
      seq: number,
      title: string,
    },
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type DeleteSceneMutationVariables = {
  input: DeleteSceneInput,
};

export type DeleteSceneMutation = {
  deleteScene:  {
    __typename: "Scene",
    id: string,
    tone: Tone,
    seq: number,
    question: string,
    setting: string,
    answer: string,
    event:  {
      __typename: "Event",
      id: string,
      seq: number,
      title: string,
    },
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    bigPicture: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    palette:  {
      __typename: "Palette",
      id: string,
    } | null,
    legacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    periods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    currentFocus:  {
      __typename: "Focus",
      id: string,
      title: string,
    } | null,
    focii:  {
      __typename: "ModelFocusConnection",
      items:  Array< {
        __typename: "Focus",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    touch: string | null,
    changes:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      bigPicture: string,
      players:  {
        __typename: "ModelPlayerConnection",
        items:  Array< {
          __typename: "Player",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      palette:  {
        __typename: "Palette",
        id: string,
      } | null,
      legacies:  {
        __typename: "ModelLegacyConnection",
        items:  Array< {
          __typename: "Legacy",
          id: string,
          title: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      periods:  {
        __typename: "ModelPeriodConnection",
        items:  Array< {
          __typename: "Period",
          id: string,
          title: string,
          seq: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      currentFocus:  {
        __typename: "Focus",
        id: string,
        title: string,
      } | null,
      focii:  {
        __typename: "ModelFocusConnection",
        items:  Array< {
          __typename: "Focus",
          id: string,
          title: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      owner: string | null,
      touch: string | null,
      changes:  {
        __typename: "ModelChangeConnection",
        items:  Array< {
          __typename: "Change",
          id: string,
          createdAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer:  {
    __typename: "Player",
    id: string,
    createdPeriods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdEvents:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdLegacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdScenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    createdChanges:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      createdPeriods:  {
        __typename: "ModelPeriodConnection",
        items:  Array< {
          __typename: "Period",
          id: string,
          title: string,
          seq: number,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdEvents:  {
        __typename: "ModelEventConnection",
        items:  Array< {
          __typename: "Event",
          id: string,
          seq: number,
          title: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdLegacies:  {
        __typename: "ModelLegacyConnection",
        items:  Array< {
          __typename: "Legacy",
          id: string,
          title: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdScenes:  {
        __typename: "ModelSceneConnection",
        items:  Array< {
          __typename: "Scene",
          id: string,
          seq: number,
          question: string,
          setting: string,
          answer: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      game:  {
        __typename: "Game",
        id: string,
        bigPicture: string,
        owner: string | null,
        touch: string | null,
        createdAt: string | null,
      },
      createdChanges:  {
        __typename: "ModelChangeConnection",
        items:  Array< {
          __typename: "Change",
          id: string,
          createdAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetChangeQueryVariables = {
  id: string,
};

export type GetChangeQuery = {
  getChange:  {
    __typename: "Change",
    id: string,
    createdAt: string | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type ListChangesQueryVariables = {
  filter?: ModelChangeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChangesQuery = {
  listChanges:  {
    __typename: "ModelChangeConnection",
    items:  Array< {
      __typename: "Change",
      id: string,
      createdAt: string | null,
      game:  {
        __typename: "Game",
        id: string,
        bigPicture: string,
        owner: string | null,
        touch: string | null,
        createdAt: string | null,
      },
      player:  {
        __typename: "Player",
        id: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPaletteQueryVariables = {
  id: string,
};

export type GetPaletteQuery = {
  getPalette:  {
    __typename: "Palette",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    items:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    yesItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    noItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPalettesQueryVariables = {
  filter?: ModelPaletteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPalettesQuery = {
  listPalettes:  {
    __typename: "ModelPaletteConnection",
    items:  Array< {
      __typename: "Palette",
      id: string,
      game:  {
        __typename: "Game",
        id: string,
        bigPicture: string,
        owner: string | null,
        touch: string | null,
        createdAt: string | null,
      },
      items:  {
        __typename: "ModelPaletteItemConnection",
        items:  Array< {
          __typename: "PaletteItem",
          id: string,
          title: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      yesItems:  {
        __typename: "ModelPaletteItemConnection",
        items:  Array< {
          __typename: "PaletteItem",
          id: string,
          title: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      noItems:  {
        __typename: "ModelPaletteItemConnection",
        items:  Array< {
          __typename: "PaletteItem",
          id: string,
          title: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPaletteItemQueryVariables = {
  id: string,
};

export type GetPaletteItemQuery = {
  getPaletteItem:  {
    __typename: "PaletteItem",
    id: string,
    title: string,
    palette:  {
      __typename: "Palette",
      id: string,
    },
    yesPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
    noPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
  } | null,
};

export type ListPaletteItemsQueryVariables = {
  filter?: ModelPaletteItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaletteItemsQuery = {
  listPaletteItems:  {
    __typename: "ModelPaletteItemConnection",
    items:  Array< {
      __typename: "PaletteItem",
      id: string,
      title: string,
      palette:  {
        __typename: "Palette",
        id: string,
      },
      yesPalette:  {
        __typename: "Palette",
        id: string,
      } | null,
      noPalette:  {
        __typename: "Palette",
        id: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLegacyQueryVariables = {
  id: string,
};

export type GetLegacyQuery = {
  getLegacy:  {
    __typename: "Legacy",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
    title: string,
  } | null,
};

export type ListLegacysQueryVariables = {
  filter?: ModelLegacyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLegacysQuery = {
  listLegacys:  {
    __typename: "ModelLegacyConnection",
    items:  Array< {
      __typename: "Legacy",
      id: string,
      game:  {
        __typename: "Game",
        id: string,
        bigPicture: string,
        owner: string | null,
        touch: string | null,
        createdAt: string | null,
      },
      player:  {
        __typename: "Player",
        id: string,
      },
      title: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPeriodQueryVariables = {
  id: string,
};

export type GetPeriodQuery = {
  getPeriod:  {
    __typename: "Period",
    id: string,
    tone: Tone,
    title: string,
    seq: number,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type ListPeriodsQueryVariables = {
  filter?: ModelPeriodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPeriodsQuery = {
  listPeriods:  {
    __typename: "ModelPeriodConnection",
    items:  Array< {
      __typename: "Period",
      id: string,
      tone: Tone,
      title: string,
      seq: number,
      game:  {
        __typename: "Game",
        id: string,
        bigPicture: string,
        owner: string | null,
        touch: string | null,
        createdAt: string | null,
      },
      events:  {
        __typename: "ModelEventConnection",
        items:  Array< {
          __typename: "Event",
          id: string,
          seq: number,
          title: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      creator:  {
        __typename: "Player",
        id: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string,
    tone: Tone,
    seq: number,
    title: string,
    period:  {
      __typename: "Period",
      id: string,
      title: string,
      seq: number,
    },
    scenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      tone: Tone,
      seq: number,
      title: string,
      period:  {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      },
      scenes:  {
        __typename: "ModelSceneConnection",
        items:  Array< {
          __typename: "Scene",
          id: string,
          seq: number,
          question: string,
          setting: string,
          answer: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      creator:  {
        __typename: "Player",
        id: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFocusQueryVariables = {
  id: string,
};

export type GetFocusQuery = {
  getFocus:  {
    __typename: "Focus",
    id: string,
    title: string,
    focusedGame:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
  } | null,
};

export type ListFocussQueryVariables = {
  filter?: ModelFocusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFocussQuery = {
  listFocuss:  {
    __typename: "ModelFocusConnection",
    items:  Array< {
      __typename: "Focus",
      id: string,
      title: string,
      focusedGame:  {
        __typename: "Game",
        id: string,
        bigPicture: string,
        owner: string | null,
        touch: string | null,
        createdAt: string | null,
      } | null,
      game:  {
        __typename: "Game",
        id: string,
        bigPicture: string,
        owner: string | null,
        touch: string | null,
        createdAt: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSceneQueryVariables = {
  id: string,
};

export type GetSceneQuery = {
  getScene:  {
    __typename: "Scene",
    id: string,
    tone: Tone,
    seq: number,
    question: string,
    setting: string,
    answer: string,
    event:  {
      __typename: "Event",
      id: string,
      seq: number,
      title: string,
    },
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type ListScenesQueryVariables = {
  filter?: ModelSceneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScenesQuery = {
  listScenes:  {
    __typename: "ModelSceneConnection",
    items:  Array< {
      __typename: "Scene",
      id: string,
      tone: Tone,
      seq: number,
      question: string,
      setting: string,
      answer: string,
      event:  {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      },
      creator:  {
        __typename: "Player",
        id: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    bigPicture: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    palette:  {
      __typename: "Palette",
      id: string,
    } | null,
    legacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    periods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    currentFocus:  {
      __typename: "Focus",
      id: string,
      title: string,
    } | null,
    focii:  {
      __typename: "ModelFocusConnection",
      items:  Array< {
        __typename: "Focus",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    touch: string | null,
    changes:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    bigPicture: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    palette:  {
      __typename: "Palette",
      id: string,
    } | null,
    legacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    periods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    currentFocus:  {
      __typename: "Focus",
      id: string,
      title: string,
    } | null,
    focii:  {
      __typename: "ModelFocusConnection",
      items:  Array< {
        __typename: "Focus",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    touch: string | null,
    changes:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    bigPicture: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    palette:  {
      __typename: "Palette",
      id: string,
    } | null,
    legacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    periods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    currentFocus:  {
      __typename: "Focus",
      id: string,
      title: string,
    } | null,
    focii:  {
      __typename: "ModelFocusConnection",
      items:  Array< {
        __typename: "Focus",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    touch: string | null,
    changes:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer:  {
    __typename: "Player",
    id: string,
    createdPeriods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdEvents:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdLegacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdScenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    createdChanges:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer:  {
    __typename: "Player",
    id: string,
    createdPeriods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdEvents:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdLegacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdScenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    createdChanges:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer:  {
    __typename: "Player",
    id: string,
    createdPeriods:  {
      __typename: "ModelPeriodConnection",
      items:  Array< {
        __typename: "Period",
        id: string,
        title: string,
        seq: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdEvents:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdLegacies:  {
      __typename: "ModelLegacyConnection",
      items:  Array< {
        __typename: "Legacy",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdScenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    createdChanges:  {
      __typename: "ModelChangeConnection",
      items:  Array< {
        __typename: "Change",
        id: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateChangeSubscription = {
  onCreateChange:  {
    __typename: "Change",
    id: string,
    createdAt: string | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnUpdateChangeSubscription = {
  onUpdateChange:  {
    __typename: "Change",
    id: string,
    createdAt: string | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnDeleteChangeSubscription = {
  onDeleteChange:  {
    __typename: "Change",
    id: string,
    createdAt: string | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnCreatePaletteSubscription = {
  onCreatePalette:  {
    __typename: "Palette",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    items:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    yesItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    noItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePaletteSubscription = {
  onUpdatePalette:  {
    __typename: "Palette",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    items:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    yesItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    noItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePaletteSubscription = {
  onDeletePalette:  {
    __typename: "Palette",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    items:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    yesItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    noItems:  {
      __typename: "ModelPaletteItemConnection",
      items:  Array< {
        __typename: "PaletteItem",
        id: string,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePaletteItemSubscription = {
  onCreatePaletteItem:  {
    __typename: "PaletteItem",
    id: string,
    title: string,
    palette:  {
      __typename: "Palette",
      id: string,
    },
    yesPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
    noPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
  } | null,
};

export type OnUpdatePaletteItemSubscription = {
  onUpdatePaletteItem:  {
    __typename: "PaletteItem",
    id: string,
    title: string,
    palette:  {
      __typename: "Palette",
      id: string,
    },
    yesPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
    noPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
  } | null,
};

export type OnDeletePaletteItemSubscription = {
  onDeletePaletteItem:  {
    __typename: "PaletteItem",
    id: string,
    title: string,
    palette:  {
      __typename: "Palette",
      id: string,
    },
    yesPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
    noPalette:  {
      __typename: "Palette",
      id: string,
    } | null,
  } | null,
};

export type OnCreateLegacySubscription = {
  onCreateLegacy:  {
    __typename: "Legacy",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
    title: string,
  } | null,
};

export type OnUpdateLegacySubscription = {
  onUpdateLegacy:  {
    __typename: "Legacy",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
    title: string,
  } | null,
};

export type OnDeleteLegacySubscription = {
  onDeleteLegacy:  {
    __typename: "Legacy",
    id: string,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    player:  {
      __typename: "Player",
      id: string,
    },
    title: string,
  } | null,
};

export type OnCreatePeriodSubscription = {
  onCreatePeriod:  {
    __typename: "Period",
    id: string,
    tone: Tone,
    title: string,
    seq: number,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnUpdatePeriodSubscription = {
  onUpdatePeriod:  {
    __typename: "Period",
    id: string,
    tone: Tone,
    title: string,
    seq: number,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnDeletePeriodSubscription = {
  onDeletePeriod:  {
    __typename: "Period",
    id: string,
    tone: Tone,
    title: string,
    seq: number,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        seq: number,
        title: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string,
    tone: Tone,
    seq: number,
    title: string,
    period:  {
      __typename: "Period",
      id: string,
      title: string,
      seq: number,
    },
    scenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string,
    tone: Tone,
    seq: number,
    title: string,
    period:  {
      __typename: "Period",
      id: string,
      title: string,
      seq: number,
    },
    scenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string,
    tone: Tone,
    seq: number,
    title: string,
    period:  {
      __typename: "Period",
      id: string,
      title: string,
      seq: number,
    },
    scenes:  {
      __typename: "ModelSceneConnection",
      items:  Array< {
        __typename: "Scene",
        id: string,
        seq: number,
        question: string,
        setting: string,
        answer: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnCreateFocusSubscription = {
  onCreateFocus:  {
    __typename: "Focus",
    id: string,
    title: string,
    focusedGame:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
  } | null,
};

export type OnUpdateFocusSubscription = {
  onUpdateFocus:  {
    __typename: "Focus",
    id: string,
    title: string,
    focusedGame:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
  } | null,
};

export type OnDeleteFocusSubscription = {
  onDeleteFocus:  {
    __typename: "Focus",
    id: string,
    title: string,
    focusedGame:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    } | null,
    game:  {
      __typename: "Game",
      id: string,
      bigPicture: string,
      owner: string | null,
      touch: string | null,
      createdAt: string | null,
    },
  } | null,
};

export type OnCreateSceneSubscription = {
  onCreateScene:  {
    __typename: "Scene",
    id: string,
    tone: Tone,
    seq: number,
    question: string,
    setting: string,
    answer: string,
    event:  {
      __typename: "Event",
      id: string,
      seq: number,
      title: string,
    },
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnUpdateSceneSubscription = {
  onUpdateScene:  {
    __typename: "Scene",
    id: string,
    tone: Tone,
    seq: number,
    question: string,
    setting: string,
    answer: string,
    event:  {
      __typename: "Event",
      id: string,
      seq: number,
      title: string,
    },
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};

export type OnDeleteSceneSubscription = {
  onDeleteScene:  {
    __typename: "Scene",
    id: string,
    tone: Tone,
    seq: number,
    question: string,
    setting: string,
    answer: string,
    event:  {
      __typename: "Event",
      id: string,
      seq: number,
      title: string,
    },
    creator:  {
      __typename: "Player",
      id: string,
    },
  } | null,
};
