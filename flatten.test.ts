
const flatten = (arr: Array<any>): Array<any> =>
  arr.reduce((a, x) => a.concat(flattenOrArray(x)), [])

const flattenOrArray = (x: any) =>
  Array.isArray(x) ? flatten(x) : [x]

test('no nesting', () => {
  expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
})

test('1 level', () => {
  expect(flatten([[1, 2], 3])).toEqual([1, 2, 3])
})

test('3 level', () => {
  expect(flatten([[1, 2], 3, [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6])
})