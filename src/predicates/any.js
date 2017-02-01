import { toPredicate } from '../utils/predicate-utils'

/**
 * Predicate will return true if any predicate argument match
 *
 * @category Predicate
 * @param {...function} predicates
 * @returns {function} new predicate
 * @example
 *
 * remove(any(first, last), [0,1,2,3]
 * // => [1,2]
 */
export const any = (...predicates) => {
  const _predicates = predicates.map(toPredicate)

  return (item, index, list) => _predicates.some(predicate => predicate(item, index, list))
}
