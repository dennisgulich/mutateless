import curry from 'lodash.curry'

/**
 * A curried function that creates a new list with the appended value.
 *
 * @category Array
 * @param {*} item the value to append
 * @returns {array} new list with the appended value
 * @example
 *
 * add(3, [1,2])
 * // => [1,2,3]
 */
export const add = curry((item, list) => [...list, item])
