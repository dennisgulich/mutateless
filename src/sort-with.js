import curry from 'lodash.curry'

/**
 * A curried function that creates a new sorted list based on a compareFunction
 *
 * @category Array
 * @param {function} compareFunction
 * @returns {array} new sorted list
 * @example
 *
 * sort((a, b) => a - b, [3,1,2])
 * // => [1,2,3]
 */
export const sortWith = curry((compareFunction, list) => [...list].sort(compareFunction))
