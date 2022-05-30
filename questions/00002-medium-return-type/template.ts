type MyReturnType<Func extends (...args: any[]) => any> =
  Func extends (...args: any[]) => infer RType
    ? RType
    : never
