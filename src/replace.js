import curry from 'lodash.curry'
import { toPredicate } from './utils/predicate-utils'

/**
 * A curried function that creates a new list with the replaced items based on the predicate.
 *
 * @category Array
 * @param {*} predicate function or reference to remove
 * @param {*} modifier function or reference
 * @returns {array} new list with the replaced items
 * @example
 *
 * replace(item => item === 3, 2, [1,3]);
 * // => [1,2]
 */
export const replace = curry((predicate, modifier, list) => {
  const _predicate = toPredicate(predicate)

  return list.map((item, index) =>
    _predicate(item, index, list)
      ? modifier instanceof Function ? modifier(item, index, list) : modifier
      : item
  )
})
