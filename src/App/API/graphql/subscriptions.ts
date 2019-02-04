// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
  }
}
`;
export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreatePlayer = `subscription OnCreatePlayer {
  onCreatePlayer {
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
export const onUpdatePlayer = `subscription OnUpdatePlayer {
  onUpdatePlayer {
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
export const onDeletePlayer = `subscription OnDeletePlayer {
  onDeletePlayer {
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
export const onCreateChange = `subscription OnCreateChange {
  onCreateChange {
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
export const onUpdateChange = `subscription OnUpdateChange {
  onUpdateChange {
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
export const onDeleteChange = `subscription OnDeleteChange {
  onDeleteChange {
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
export const onCreatePalette = `subscription OnCreatePalette {
  onCreatePalette {
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
export const onUpdatePalette = `subscription OnUpdatePalette {
  onUpdatePalette {
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
export const onDeletePalette = `subscription OnDeletePalette {
  onDeletePalette {
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
export const onCreatePaletteItem = `subscription OnCreatePaletteItem {
  onCreatePaletteItem {
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
export const onUpdatePaletteItem = `subscription OnUpdatePaletteItem {
  onUpdatePaletteItem {
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
export const onDeletePaletteItem = `subscription OnDeletePaletteItem {
  onDeletePaletteItem {
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
export const onCreateLegacy = `subscription OnCreateLegacy {
  onCreateLegacy {
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
export const onUpdateLegacy = `subscription OnUpdateLegacy {
  onUpdateLegacy {
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
export const onDeleteLegacy = `subscription OnDeleteLegacy {
  onDeleteLegacy {
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
export const onCreatePeriod = `subscription OnCreatePeriod {
  onCreatePeriod {
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
export const onUpdatePeriod = `subscription OnUpdatePeriod {
  onUpdatePeriod {
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
export const onDeletePeriod = `subscription OnDeletePeriod {
  onDeletePeriod {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateFocus = `subscription OnCreateFocus {
  onCreateFocus {
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
export const onUpdateFocus = `subscription OnUpdateFocus {
  onUpdateFocus {
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
export const onDeleteFocus = `subscription OnDeleteFocus {
  onDeleteFocus {
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
export const onCreateScene = `subscription OnCreateScene {
  onCreateScene {
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
export const onUpdateScene = `subscription OnUpdateScene {
  onUpdateScene {
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
export const onDeleteScene = `subscription OnDeleteScene {
  onDeleteScene {
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
