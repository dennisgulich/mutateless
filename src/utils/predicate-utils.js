import { ref } from '../predicates/ref'

export const toPredicate = value => value instanceof Function
  ? value
  : ref(value)
