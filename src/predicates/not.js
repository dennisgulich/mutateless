import { toPredicate } from '../utils/predicate-utils'

/**
 * Predicate will return true if predicate argument should return false
 *
 * @category Predicate
 * @param {function} predicate TODO
 * @returns {function} TODO
 * @example
 *
 * not(first);
 * // => [2,3]
 */
export const not = predicate => {
  const _predicate = toPredicate(predicate)

  return (item, index, list) => !_predicate(item, index, list)
}
