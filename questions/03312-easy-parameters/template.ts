type MyParameters<Func extends (...args: any[]) => any> =
  Func extends (...args: infer Args) => any
    ? Args
    : never
