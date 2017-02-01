import curry from 'lodash.curry'
import { not } from './predicates/not'
import { toPredicate } from './utils/predicate-utils'

/**
 * A curried function that creates a new list without the removed items based on the predicate.
 *
 * @category Array
 * @param {*} predicate function or reference to remove
 * @param {array} list
 * @returns {array} new list without removed items
 * @example
 *
 * remove(item => item === 1, [1,2,3])
 * // => [2,3]
 */
export const remove = curry((predicate, list) => {
  const _predicate = not(toPredicate(predicate))

  return list.filter(_predicate)
})
