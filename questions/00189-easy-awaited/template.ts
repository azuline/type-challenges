type MyAwaited<T extends Promise<any>> =
  T extends Promise<infer V1> ?
    V1 extends Promise<infer V2>
      ? V2
      : V1
    : never
