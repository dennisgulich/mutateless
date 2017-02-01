/**
 * Predicate will return true if the value match second value
 *
 * @category Predicate
 * @param {number} value
 * @returns {function} new predicate
 * @example
 *
 * remove(ref(1), [1,2,3])
 * // => [2,3]
 */
export const ref = value => item => value === item
