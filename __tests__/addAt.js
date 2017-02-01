import { addAt } from '../src/addAt'
import { first } from '../src/predicates/first'
import { not } from '../src/predicates/not'

describe('#addAt', () => {

  it('should return a new list with appended value where predicate is fulfilled', () => {
    const list = addAt(3, not(first), [0, 1, 2])

    expect(list).toEqual([0, 3, 1, 3, 2])
  })

  it('should return a new list even if no predicates is fulfilled', () => {
    const ref = [0, 1, 2]
    const list = addAt(3, item => item === 4, ref)

    expect(ref).not.toBe(list)
  })

})
