import { match } from '../../src/predicates/match'

describe('#match', () => {

  it('should return true if all properties match', () => {
    const object = {
      id: 1,
      checked: true,
      title: 'test'
    }

    expect(match({id: 1, checked: true})(object)).toEqual(true)
  })

  it("should return false if any property doesn't match", () => {
    const object = {
      id: 1,
      checked: true,
    }

    expect(match({id: 1, checked: false})(object)).toEqual(false)
  })

})
