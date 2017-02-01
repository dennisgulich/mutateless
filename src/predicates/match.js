/**
 * Predicate will return true if all properties match
 *
 * @category Predicate
 * @param {object} object
 * @returns {function} new predicate
 * @example
 *
 * remove(match({checked: true}), [{id: 1, checked: false},{id: 2, checked: true}]
 * // => [{id: 1, checked: false}]
 */
export const match = object => {
  const keys = Object.keys(object)

  return item => keys.every(key => object[key] === item[key])
}
