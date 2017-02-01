/**
 * Predicate will return true if index is within range
 *
 * @category Predicate
 * @param {number} from index
 * @param {number} to index
 * @returns {function} new predicate
 * @example
 *
 * remove(range(1,2), [1,2,3,4])
 * // => [1,4]
 */
export const range = (from, to) => (item, index) => from <= index && to >= index
