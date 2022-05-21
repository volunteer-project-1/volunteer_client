/**
 * T가 undefined나 null이 될 수 있도록 함.
 * API 호출 시 input은 undefined가 될 수 있고 output은 null이 될 수 있으므로 둘 다 고려하기 위해 만듬.
 */
export type Optional<T> = T | undefined | null;

/**
 * T가 undefined나 null이 되지 못하도록 함.
 * Optional<T>의 반대.
 */
export type NonOptional<T> = NonNullable<T>;

/**
 * 각 속성이 optional이 될 수 있도록 함.
 * Partial과 유사한데 `| null`이 추가되었다고 보면 됨.
 */
export type AllOptional<T> = {
  [P in keyof T]?: T[P] | null;
};

export interface DefaultTime {
  created_at?: Date;
  updated_at?: Date;
}
