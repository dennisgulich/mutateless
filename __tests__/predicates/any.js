import { any } from '../../src/predicates/any'
import { first } from '../../src/predicates/first'
import { last } from '../../src/predicates/last'

describe('#any', () => {

  const list = [1, 2, 3]

  it('should return true if any match', () => {
    expect(any(first, last)(1, 0, list)).toEqual(true)
  })

  it('should return false if none match', () => {
    expect(any(first, last)(2, 1, list)).toEqual(false)
  })

})
