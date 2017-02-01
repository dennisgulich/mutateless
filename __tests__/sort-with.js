import { sortWith } from '../src/sort-with'

describe('#sortWith', () => {

  it('should return a new sorted list', () => {
    const list = [1, 3, 2]

    expect(sortWith((a, b) => a - b)(list)).toEqual([1, 2, 3])
  })

})
