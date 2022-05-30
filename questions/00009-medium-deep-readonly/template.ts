type DeepReadonly<T> = { readonly [k in keyof T]: keyof T[k] extends never ? T[k] : DeepReadonly<T[k]> }
