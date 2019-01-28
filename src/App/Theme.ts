export const colors = {
  top: {
    bg: '#EAE6E3',
    pri: '#322E37',
    sec: '#777370',
  },
  high: {
    bg: '#DDD6D1',
    pri: '#322E37',
    sec: '#777370',
  },
  low: {
    bg: '#C7BFBB',
    pri: '#322E37',
    sec: '#777370',
  },
  bot: {
    bg: '#4E4755',
    pri: '#EAE6E3',
    sec: '#DDD6D1',
  },
  bar: {
    bg: '#322E37',
    pri: '#EAE6E3',
    sec: '#DDD6D1',
  }
}

const bp = 600

export const media = {
  small: `@media (max-width: ${bp}px)`,
  large: `@media (min-width: ${bp + 1}px)`,
}
