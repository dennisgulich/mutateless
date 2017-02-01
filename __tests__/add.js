import { add } from '../src/add'

describe('#add', () => {

  it('should return a new list with append value', () => {
    const list = add(3, [0, 1, 2])

    expect(list).toEqual([0, 1, 2, 3])
  })

})
