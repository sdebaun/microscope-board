// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
  }
}
`;
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    bigPicture
    players {
      items {
        id
      }
      nextToken
    }
    palette {
      id
    }
    legacies {
      items {
        id
        title
      }
      nextToken
    }
    periods {
      items {
        id
        title
        seq
      }
      nextToken
    }
    currentFocus {
      id
      title
    }
    focii {
      items {
        id
        title
      }
      nextToken
    }
    owner
    touch
    changes {
      items {
        id
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    bigPicture
    players {
      items {
        id
      }
      nextToken
    }
    palette {
      id
    }
    legacies {
      items {
        id
        title
      }
      nextToken
    }
    periods {
      items {
        id
        title
        seq
      }
      nextToken
    }
    currentFocus {
      id
      title
    }
    focii {
      items {
        id
        title
      }
      nextToken
    }
    owner
    touch
    changes {
      items {
        id
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    bigPicture
    players {
      items {
        id
      }
      nextToken
    }
    palette {
      id
    }
    legacies {
      items {
        id
        title
      }
      nextToken
    }
    periods {
      items {
        id
        title
        seq
      }
      nextToken
    }
    currentFocus {
      id
      title
    }
    focii {
      items {
        id
        title
      }
      nextToken
    }
    owner
    touch
    changes {
      items {
        id
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const createPlayer = `mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
    id
    createdPeriods {
      items {
        id
        title
        seq
      }
      nextToken
    }
    createdEvents {
      items {
        id
        seq
        title
      }
      nextToken
    }
    createdLegacies {
      items {
        id
        title
      }
      nextToken
    }
    createdScenes {
      items {
        id
        seq
        question
        setting
        answer
      }
      nextToken
    }
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    createdChanges {
      items {
        id
        createdAt
      }
      nextToken
    }
  }
}
`;
export const updatePlayer = `mutation UpdatePlayer($input: UpdatePlayerInput!) {
  updatePlayer(input: $input) {
    id
    createdPeriods {
      items {
        id
        title
        seq
      }
      nextToken
    }
    createdEvents {
      items {
        id
        seq
        title
      }
      nextToken
    }
    createdLegacies {
      items {
        id
        title
      }
      nextToken
    }
    createdScenes {
      items {
        id
        seq
        question
        setting
        answer
      }
      nextToken
    }
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    createdChanges {
      items {
        id
        createdAt
      }
      nextToken
    }
  }
}
`;
export const deletePlayer = `mutation DeletePlayer($input: DeletePlayerInput!) {
  deletePlayer(input: $input) {
    id
    createdPeriods {
      items {
        id
        title
        seq
      }
      nextToken
    }
    createdEvents {
      items {
        id
        seq
        title
      }
      nextToken
    }
    createdLegacies {
      items {
        id
        title
      }
      nextToken
    }
    createdScenes {
      items {
        id
        seq
        question
        setting
        answer
      }
      nextToken
    }
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    createdChanges {
      items {
        id
        createdAt
      }
      nextToken
    }
  }
}
`;
export const createChange = `mutation CreateChange($input: CreateChangeInput!) {
  createChange(input: $input) {
    id
    createdAt
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    player {
      id
    }
  }
}
`;
export const updateChange = `mutation UpdateChange($input: UpdateChangeInput!) {
  updateChange(input: $input) {
    id
    createdAt
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    player {
      id
    }
  }
}
`;
export const deleteChange = `mutation DeleteChange($input: DeleteChangeInput!) {
  deleteChange(input: $input) {
    id
    createdAt
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    player {
      id
    }
  }
}
`;
export const createPalette = `mutation CreatePalette($input: CreatePaletteInput!) {
  createPalette(input: $input) {
    id
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    items {
      items {
        id
        title
      }
      nextToken
    }
    yesItems {
      items {
        id
        title
      }
      nextToken
    }
    noItems {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const updatePalette = `mutation UpdatePalette($input: UpdatePaletteInput!) {
  updatePalette(input: $input) {
    id
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    items {
      items {
        id
        title
      }
      nextToken
    }
    yesItems {
      items {
        id
        title
      }
      nextToken
    }
    noItems {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const deletePalette = `mutation DeletePalette($input: DeletePaletteInput!) {
  deletePalette(input: $input) {
    id
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    items {
      items {
        id
        title
      }
      nextToken
    }
    yesItems {
      items {
        id
        title
      }
      nextToken
    }
    noItems {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const createPaletteItem = `mutation CreatePaletteItem($input: CreatePaletteItemInput!) {
  createPaletteItem(input: $input) {
    id
    title
    palette {
      id
    }
    yesPalette {
      id
    }
    noPalette {
      id
    }
  }
}
`;
export const updatePaletteItem = `mutation UpdatePaletteItem($input: UpdatePaletteItemInput!) {
  updatePaletteItem(input: $input) {
    id
    title
    palette {
      id
    }
    yesPalette {
      id
    }
    noPalette {
      id
    }
  }
}
`;
export const deletePaletteItem = `mutation DeletePaletteItem($input: DeletePaletteItemInput!) {
  deletePaletteItem(input: $input) {
    id
    title
    palette {
      id
    }
    yesPalette {
      id
    }
    noPalette {
      id
    }
  }
}
`;
export const createLegacy = `mutation CreateLegacy($input: CreateLegacyInput!) {
  createLegacy(input: $input) {
    id
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    player {
      id
    }
    title
  }
}
`;
export const updateLegacy = `mutation UpdateLegacy($input: UpdateLegacyInput!) {
  updateLegacy(input: $input) {
    id
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    player {
      id
    }
    title
  }
}
`;
export const deleteLegacy = `mutation DeleteLegacy($input: DeleteLegacyInput!) {
  deleteLegacy(input: $input) {
    id
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    player {
      id
    }
    title
  }
}
`;
export const createPeriod = `mutation CreatePeriod($input: CreatePeriodInput!) {
  createPeriod(input: $input) {
    id
    tone
    title
    seq
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    events {
      items {
        id
        seq
        title
      }
      nextToken
    }
    creator {
      id
    }
  }
}
`;
export const updatePeriod = `mutation UpdatePeriod($input: UpdatePeriodInput!) {
  updatePeriod(input: $input) {
    id
    tone
    title
    seq
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    events {
      items {
        id
        seq
        title
      }
      nextToken
    }
    creator {
      id
    }
  }
}
`;
export const deletePeriod = `mutation DeletePeriod($input: DeletePeriodInput!) {
  deletePeriod(input: $input) {
    id
    tone
    title
    seq
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    events {
      items {
        id
        seq
        title
      }
      nextToken
    }
    creator {
      id
    }
  }
}
`;
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
    id
    tone
    seq
    title
    period {
      id
      title
      seq
    }
    scenes {
      items {
        id
        seq
        question
        setting
        answer
      }
      nextToken
    }
    creator {
      id
    }
  }
}
`;
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
    id
    tone
    seq
    title
    period {
      id
      title
      seq
    }
    scenes {
      items {
        id
        seq
        question
        setting
        answer
      }
      nextToken
    }
    creator {
      id
    }
  }
}
`;
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
    id
    tone
    seq
    title
    period {
      id
      title
      seq
    }
    scenes {
      items {
        id
        seq
        question
        setting
        answer
      }
      nextToken
    }
    creator {
      id
    }
  }
}
`;
export const createFocus = `mutation CreateFocus($input: CreateFocusInput!) {
  createFocus(input: $input) {
    id
    title
    focusedGame {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
  }
}
`;
export const updateFocus = `mutation UpdateFocus($input: UpdateFocusInput!) {
  updateFocus(input: $input) {
    id
    title
    focusedGame {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
  }
}
`;
export const deleteFocus = `mutation DeleteFocus($input: DeleteFocusInput!) {
  deleteFocus(input: $input) {
    id
    title
    focusedGame {
      id
      bigPicture
      owner
      touch
      createdAt
    }
    game {
      id
      bigPicture
      owner
      touch
      createdAt
    }
  }
}
`;
export const createScene = `mutation CreateScene($input: CreateSceneInput!) {
  createScene(input: $input) {
    id
    tone
    seq
    question
    setting
    answer
    event {
      id
      seq
      title
    }
    creator {
      id
    }
  }
}
`;
export const updateScene = `mutation UpdateScene($input: UpdateSceneInput!) {
  updateScene(input: $input) {
    id
    tone
    seq
    question
    setting
    answer
    event {
      id
      seq
      title
    }
    creator {
      id
    }
  }
}
`;
export const deleteScene = `mutation DeleteScene($input: DeleteSceneInput!) {
  deleteScene(input: $input) {
    id
    tone
    seq
    question
    setting
    answer
    event {
      id
      seq
      title
    }
    creator {
      id
    }
  }
}
`;
