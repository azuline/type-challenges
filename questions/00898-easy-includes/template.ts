import type { Equal } from '@type-challenges/utils'

export type Includes<List extends readonly any[], Elem> =
  List extends [infer Head, ...infer Tail]
    ? Equal<Head, Elem> extends true
      ? true
      : Includes<Tail, Elem>
    : false
