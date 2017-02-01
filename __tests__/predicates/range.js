import { range } from '../../src/predicates/range'

describe('#range', () => {

  const list = [1, 2, 3, 4]
  const testRange = range(1,2)

  it('should return true when index is in within the range', () => {
    const index = 2
    expect(testRange(list[index], index, list)).toEqual(true)
  })

  it('should return false when index is outside the range', () => {
    const index = 3
    expect(testRange(list[index], index, list)).toEqual(false)
  })

})
