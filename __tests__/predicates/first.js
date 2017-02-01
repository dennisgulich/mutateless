import { first } from '../../src/predicates/first'

describe('#first', () => {

  it('should return true for index 0', () => {
    expect(first('first', 0)).toEqual(true)
  })

  it('should return false for index greater than 0', () => {
    expect(first('first', 1)).toEqual(false)
  })

})
