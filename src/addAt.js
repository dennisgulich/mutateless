import curry from 'lodash.curry'
import { toPredicate } from './utils/predicate-utils'

/**
 * A curried function that creates a new list with the appended value where the predicate is fulfilled.
 *
 * @category Array
 * @param {*} item the value to append
 * @param {*} predicate function or reference to append before
 * @returns {array} new list with the appended value
 * @example
 *
 * add(1, item => item === 2)([2,3]);
 * // => [1,2,3]
 */
export const addAt = curry((item, predicate, list) => {
  const _predicate = toPredicate(predicate)

  return list.reduce((accumulated, innerItem, index) => {
    if (_predicate(innerItem, index)) {
      accumulated.push(item)
    }

    accumulated.push(innerItem)
    return accumulated
  }, [])
})
