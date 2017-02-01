import { remove } from '../src/remove'

describe('#remove', () => {

  it('should return a new list without the items where the predicate is fulfilled', () => {
    const value = 2
    const list = remove(value, [1, value, 3])

    expect(list).toEqual([1, 3])
  })

  it('should return a new list even if no predicates is fulfilled', () => {
    const ref = [0, 1, 2]
    const list = remove(item => item === 4, ref)

    expect(ref).not.toBe(list)
  })

})
