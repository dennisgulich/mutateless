import { all } from '../../src/predicates/all'
import { first } from '../../src/predicates/first'
import { ref } from '../../src/predicates/ref'

describe('#all', () => {

  const list = [1, 2, 3]

  it('should return true if all predicates matches', () => {
    expect(all(first, ref(1))(1, 0, list)).toEqual(true)
  })

  it('should return false if only some match', () => {
    expect(all(first, ref(2))(1, 0, list)).toEqual(false)
  })

})
