import curry from 'lodash.curry'

/**
 * A curried function that creates a new collection with the applied modifiers
 *
 * @category Collection
 * @param {object} modifiers properties to modify
 * @param {object | array} collection apply modifiers on
 * @returns {object | array} new collection with the modifiers applied
 * @example
 *
 * assign({a: 'A'}, {a: 'a', b: 'b'});
 * // => {a: 'A', b: 'b'}
 */
export const assign = curry((modifiers, collection) => {
  const transformed = Object.keys(modifiers)
    .reduce((acc, key) => {
      acc[key] = modifiers[key] instanceof Function ? modifiers[key](collection[key]) : modifiers[key]
      return acc
    }, {})

  return Array.isArray(collection)
    ? collection.map(item => Object.assign({}, item, transformed))
    : Object.assign({}, collection, transformed)
})
