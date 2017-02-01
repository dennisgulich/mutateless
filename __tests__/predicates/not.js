import { not } from '../../src/predicates/not'

describe('#not', () => {

  it('should return true when predicate is false', () => {
    expect(not(() => false)()).toEqual(true)
  })

  it('should return false when predicate is true', () => {
    expect(not(() => true)()).toEqual(false)
  })

})
