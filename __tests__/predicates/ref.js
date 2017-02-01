import { ref } from '../../src/predicates/ref'

describe('#ref', () => {

  const obj = {a: 1}

  it('should return true when item is a reference', () => {
    expect(ref(obj)(obj)).toEqual(true)
  })

  it("should return false when item isn't a reference", () => {
    expect(ref(obj)({a: 1})).toEqual(false)
  })

})
