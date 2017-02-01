/**
 * Predicate will return true if index match
 *
 * @category Predicate
 * @param {number} index
 * @returns {function} new predicate
 */
export const index = index => (item, i) => i === index
