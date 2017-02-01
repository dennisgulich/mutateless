import { replace } from '../src/replace'

describe('#replace', () => {

  const ref = [1, 3]

  it('should return a new list with the items replaced by value where predicate is fulfilled', () => {
    const list = replace(item => item === 3, 2, ref)

    expect(list).toEqual([1, 2])
  })

  it('should return a new list with the items replaced by modifier function where predicate is fulfilled', () => {
    const list = replace(item => item === 3, i => i * 2, ref)

    expect(list).toEqual([1, 6])
  })

  it('should return a new list even if no predicates is fulfilled', () => {
    const list = replace(item => item === 4, 1, ref)

    expect(ref).not.toBe(list)
  })

})
