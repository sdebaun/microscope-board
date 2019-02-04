// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
    }
    nextToken
  }
}
`;
export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
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
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPlayer = `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
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
export const listPlayers = `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getChange = `query GetChange($id: ID!) {
  getChange(id: $id) {
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
export const listChanges = `query ListChanges(
  $filter: ModelChangeFilterInput
  $limit: Int
  $nextToken: String
) {
  listChanges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPalette = `query GetPalette($id: ID!) {
  getPalette(id: $id) {
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
export const listPalettes = `query ListPalettes(
  $filter: ModelPaletteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPalettes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPaletteItem = `query GetPaletteItem($id: ID!) {
  getPaletteItem(id: $id) {
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
export const listPaletteItems = `query ListPaletteItems(
  $filter: ModelPaletteItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listPaletteItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getLegacy = `query GetLegacy($id: ID!) {
  getLegacy(id: $id) {
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
export const listLegacys = `query ListLegacys(
  $filter: ModelLegacyFilterInput
  $limit: Int
  $nextToken: String
) {
  listLegacys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPeriod = `query GetPeriod($id: ID!) {
  getPeriod(id: $id) {
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
export const listPeriods = `query ListPeriods(
  $filter: ModelPeriodFilterInput
  $limit: Int
  $nextToken: String
) {
  listPeriods(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getFocus = `query GetFocus($id: ID!) {
  getFocus(id: $id) {
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
export const listFocuss = `query ListFocuss(
  $filter: ModelFocusFilterInput
  $limit: Int
  $nextToken: String
) {
  listFocuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getScene = `query GetScene($id: ID!) {
  getScene(id: $id) {
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
export const listScenes = `query ListScenes(
  $filter: ModelSceneFilterInput
  $limit: Int
  $nextToken: String
) {
  listScenes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
