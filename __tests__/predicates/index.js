import { index } from '../../src/predicates/index'

describe('#index', () => {

  it('should return true when index match', () => {
    expect(index(1)('hello world', 1)).toEqual(true)
  })

  it('should return false when index do not match', () => {
    expect(index(1)('hello sweden', 0)).toEqual(false)
  })

})
