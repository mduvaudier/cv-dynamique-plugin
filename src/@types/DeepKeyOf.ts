type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

export type DeepKeyOf<T> = {
  [K in keyof T]: T[K] extends object
    ? Join<K, DeepKeyOf<T[K]>>
    : K
}[keyof T];