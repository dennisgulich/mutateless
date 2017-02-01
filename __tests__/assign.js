import { assign } from '../src/assign'

describe('#assign', () => {

  it('should return a new object with modifier values applied', () => {
    const obj = assign({a: 0}, {a: 1, b: 2})

    expect(obj).toEqual({a: 0, b: 2})
  })

  it('should return a new object with modifier functions applied', () => {
    const obj = assign({b: i => i * 2}, {a: 1, b: 2})

    expect(obj).toEqual({a: 1, b: 4})
  })

  it('should return a new object with applied modifiers on nested values', () => {
    const article = {
      id: 1,
      user: {
        id: 1337,
        username: 'jack.bauer'
      }
    }

    const changeUsername = username => assign({username})

    const updateArticleUser = assign({user: changeUsername('kiefer.sutherland')})

    const obj = updateArticleUser(article)

    expect(obj).toEqual({
      id: 1,
      user: {
        id: 1337,
        username: 'kiefer.sutherland'
      }
    })
  })

  it('should return a new list with modifiers applied on all values', () => {
    const list = [
      {a: 'A', b: 'b'},
      {a: 'wrong', b: 'b'}
    ]

    const value = assign({a: 'a'}, list)

    expect(value).toEqual([
      {a: 'a', b: 'b'},
      {a: 'a', b: 'b'}
    ])
  })

})
