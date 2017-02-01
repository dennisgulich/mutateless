import { toPredicate } from '../utils/predicate-utils'

/**
 * Predicate will return true if all predicate arguments match
 *
 * @category Predicate
 * @param {...*} predicates
 * @returns {function} new predicate
 * @example
 *
 * remove(all(first, ref(0)), [0,1,2,3]
 * // => [1,2,3]
 */
export const all = (...predicates) => {
  const _predicates = predicates.map(toPredicate)

  return (item, index, list) => _predicates.every(predicate => predicate(item, index, list))
}
