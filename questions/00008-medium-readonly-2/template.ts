type MyReadonly2<T, K extends keyof T = keyof T> =
  { readonly [k in K]: T[k] } & { [k in Exclude<keyof T, K>]: T[k] }
