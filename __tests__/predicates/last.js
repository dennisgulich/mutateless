import { last } from '../../src/predicates/last'

describe('#last', () => {

  const list = [1, 2, 3]

  it('should return true for the last index', () => {
    const lastIndex = list.length - 1

    expect(last(list[lastIndex], lastIndex, list)).toEqual(true)
  })

  it('should return false for index lower than the last', () => {
    const index = list.length - 2

    expect(last(list[index], index, list)).toEqual(false)
  })

})
