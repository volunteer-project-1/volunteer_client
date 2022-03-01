type KeysFunction = <Key extends PropertyKey, Value>(object: Record<Key, Value>) => Array<Key>;

type ValuesFunction = <Key extends PropertyKey, Value>(object: Record<Key, Value>) => Array<Value>;

type EntriesFunction = <Key extends PropertyKey, Value>(object: Record<Key, Value>) => Array<[Key, Value]>;

type FromEntriesFunction = <Key extends PropertyKey, Value>(entries: Array<[Key, Value]>) => Record<Key, Value>;

/**
 * 엄격한 자료형 추정을 위한 Object.keys()의 wrapper.
 *
 * @example
 * const x: Record<'a' | 'b', number> = ...;
 * const k1 = Object.keys(x); // k1: string.
 * const k2 = strictKeys(x); // k2: 'a' | 'b'.
 */
export const strictKeys: KeysFunction = Object.keys;

/**
 * 엄격한 자료형 추정을 위한 Object.values()의 wrapper.
 */
export const strictValues: ValuesFunction = Object.values;

/**
 * 엄격한 자료형 추정을 위한 Object.entries()의 wrapper.
 */
export const strictEntries: EntriesFunction = Object.entries;

/**
 * 엄격한 자료형 추정을 위한 Object.fromEntries()의 wrapper.
 */
export const strictFromEntries: FromEntriesFunction = Object.fromEntries;
