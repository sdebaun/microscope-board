// import uuid from 'uuid/v3';
const uuid = require('uuid/v1')

export type Game = {
  id: string
  bigPicture: string
  palette: Palette
  legacies: Legacy[]
  periods: Period[]
  currentFocus?: Focus
  focii: Focus[]
}

export type Focus = {
  id: string
  player: Player
  title: string
}
export enum Tone {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Legacy = {
  id: string
  player: Player
  title: string
}

export type Palette = {
  yes: PaletteItem[]
  no: PaletteItem[]
}

export type PaletteItem = {
  id: string
  player: Player
  content: string
}

export type Player = {
  id: string
  name: string
}

export type Period = {
  id: string
  name: string
  seq: number
  events: Event[]
  tone: Tone
}

export type Event = {
  id: string
  name: string
  seq: number
  scenes: Scene[]
  tone: Tone
}

export type Scene = {
  id: string
  seq: number
  tone: Tone
  question: string
  setting: string
  answer: string
}

const legacies: Legacy[] = [
  {
    id: uuid(),
    player: { name: 'Mikey', id: 'MAB'},
    title: 'Generation Ships'
  },
  {
    id: uuid(),
    player: { name: 'Stevo', id: 'SPD'},
    title: 'DNI Implants'
  },
]

const palette: Palette = {
  yes: [
    {
      id: uuid(),
      player: { name: 'Mikey', id: 'MAB'},
      content: 'Space Monsters'
    }
  ],
  no: [
    {
      id: uuid(),
      player: { name: 'Mikey', id: 'MAB'},
      content: 'Psionics'
    },
    {
      id: uuid(),
      player: { name: 'Stevo', id: 'SPD'},
      content: 'FTL Travel'
    },
    {
      id: uuid(),
      player: { name: 'Stevo', id: 'SPD'},
      content: '"Traditional" Alien Civs'
    },
  ]
}

const periods: Period[] = [
  {
    id: uuid(),
    name: 'Rise of the Great Houses',
    seq: 1,
    events: [
      {
        id: uuid(),
        name: 'Collapse of Earth Ecosystem and Economy',
        seq: 1,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'Desparate Exodus of Generation Ships fleeing chaos',
        seq: 2,
        tone: Tone.LIGHT,
        scenes: []
      },
      {
        id: uuid(),
        name: 'General Machine intelligence breakthrough',
        seq: 3,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'House Charon generation ship destroyed by unknown forces',
        seq: 4,
        tone: Tone.DARK,
        scenes: []
      },
    ],
    tone: Tone.LIGHT
  },
  {
    id: uuid(),
    name: 'Rise of the NuMinds',
    seq: 2,
    tone: Tone.LIGHT,
    events: [
      {
        id: uuid(),
        name: 'Secret NuMind association forms (The Weave)',
        seq: 1,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'NuMinds broker Areas treaty to formalize House Rule',
        seq: 2,
        tone: Tone.LIGHT,
        scenes: []
      },
      {
        id: uuid(),
        name: 'The Weave starts coup on Luna leads to blood then prosperity',
        seq: 3,
        tone: Tone.DARK,
        scenes: []
      },
    ],
  },
  {
    id: uuid(),
    name: 'Spread to the Stars',
    seq: 3,
    tone: Tone.LIGHT,
    events: [
      {
        id: uuid(),
        name: 'Proxima Centauri generation ship Gaia2 arrives at destination',
        seq: 1,
        tone: Tone.LIGHT,
        scenes: [
          {
            id: uuid(),
            seq: 1,
            tone: Tone.LIGHT,
            question: 'How did Gaia2 survive transit and establish a colony?',
            setting: 'Bridge of Gaia2',
            answer: 'Genetically-advantaged line of advisors with social computer-like capabilities avoided a lot of trouble'
          },
        ]
      },
      {
        id: uuid(),
        name: 'Pharaohs dominate their world Thoth at Proxima Centauri, develop advanced tech',
        seq: 2,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'Generation ship colonies fall into savagery',
        seq: 3,
        tone: Tone.DARK,
        scenes: [
          {
            id: uuid(),
            seq: 1,
            tone: Tone.DARK,
            question: 'Why did they fall into savagery?',
            setting: 'Montage of last moments of different colony ships',
            answer: 'Genegeneered their way out of environmental problems they couldn\'t solve through limited technology',
          },

        ]
      },
      {
        id: uuid(),
        name: 'Failed colony evolves eusocial spacefaring intelligences called The Nests',
        seq: 4,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'First NuMind-equipped genship Ferryman launched by House Charon',
        seq: 5,
        tone: Tone.LIGHT,
        scenes: []
      },
      {
        id: uuid(),
        name: 'Ferryman reaches system with massive asteroid belt instead of planet, humans bioengineer themselves into the Lethe',
        seq: 6,
        tone: Tone.LIGHT,
        scenes: []
      },
      {
        id: uuid(),
        name: 'A Numind-equipped genship Babel loses its entire crew and travels alone for centuries, going a bit mad',
        seq: 7,
        tone: Tone.DARK,
        scenes: []
      },
    ],
  },
  {
    id: uuid(),
    name: 'Deep Blue Purge',
    seq: 4,
    tone: Tone.DARK,
    events: [
      {
        id: uuid(),
        name: 'Return of the Pharaohs, horrified by Numinds',
        seq: 1,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'NuMinds break Ares Treaty',
        seq: 2,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'House Elysium invents and popularizes DNI implants',
        seq: 3,
        tone: Tone.LIGHT,
        scenes: []
      },
      {
        id: uuid(),
        name: 'The Great Betrayal: NuMinds figure out FTL comms, and dont share with Humans',
        seq: 4,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'Pharaohs formalize oppressive regulation and control of NuMinds in Sol',
        seq: 5,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'Remnants of NuMind Cabal (The Weave) infiltrate House Charon',
        seq: 6,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'Babel receives signal from earth describing Deep Blue Purge, swears never to be a victim to humans',
        seq: 7,
        tone: Tone.DARK,
        scenes: []
      },

    ],
  },
  {
    id: uuid(),
    name: 'Cross-Subspecies Exterminatus War happens without NuMind calming influences',
    seq: 5,
    tone: Tone.DARK,
    events: [
      {
        id: uuid(),
        name: 'The NuMind influenced glassing of Mars',
        seq: 1,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'Babel assimilates its first human colony, becoming The Translator',
        seq: 2,
        tone: Tone.DARK,
        scenes: []
      },

    ],
  },
  {
    id: uuid(),
    name: 'NuMinds bring salvation',
    seq: 6,
    tone: Tone.LIGHT,
    events: [
      {
        id: uuid(),
        name: 'House Elysium invites a NuMind onto its ruling council',
        seq: 1,
        tone: Tone.LIGHT,
        scenes: []
      },
      {
        id: uuid(),
        name: 'A wandering nest encounters a wandering NuMind under unusual circumstances.  Love at first sight.',
        seq: 2,
        tone: Tone.LIGHT,
        scenes: []
      },

    ],
  },
  {
    id: uuid(),
    name: 'Fall of Humanity as we Know It',
    seq: 7,
    tone: Tone.LIGHT,
    events: [
      {
        id: uuid(),
        name: 'The Weave finally fractures, and the stronger faction resolves to contain or remove humanity',
        seq: 1,
        tone: Tone.DARK,
        scenes: []
      },
      {
        id: uuid(),
        name: 'Humanitys wayward children unite (Weave + Translator)',
        seq: 2,
        tone: Tone.DARK,
        scenes: []
      },      {
        id: uuid(),
        name: 'The Last Stars are Consumed by the Translator',
        seq: 3,
        tone: Tone.DARK,
        scenes: []
      },
    ],
  },
]

const currentFocus = {
  id: uuid(),
  player: { name: 'Mikey', id: 'MAB'},
  title: 'the current focus'
}

export const game: Game = {
  id: '123',
  bigPicture: 'Altered NuMinds Corrupt Great Houses',
  palette,
  legacies,
  periods,
  currentFocus,
  focii: []
}