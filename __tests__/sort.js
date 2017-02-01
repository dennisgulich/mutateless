import { sort } from '../src/sort'

describe('#sort', () => {

  it('should return a new sorted list', () => {
    const list = [1, 3, 2]

    expect(sort(list)).toEqual([1, 2, 3])
  })

})
