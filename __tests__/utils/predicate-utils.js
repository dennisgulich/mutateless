import { toPredicate } from '../../src/utils/predicate-utils'

describe('#toPredicate', () => {

  it('should return a #ref predicate if value is not a function', () => {
    const value = {a: 1}
    const predicate = toPredicate(value)

    expect(predicate(value)).toBe(true)
  })

  it('should return the same function if value is a function', () => {
    const expected = () => true
    const predicate = toPredicate(expected)

    expect(predicate).toBe(expected)
  })

})
