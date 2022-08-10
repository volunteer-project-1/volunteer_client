import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type SetState<State> = Dispatch<SetStateAction<State>>;

type OnChangeValue = (event: ChangeEvent<Element & { value: string }>) => void;

/**
 * 현재 value의 값을 상태에 저장하는 hook.
 * `<input/>` 등에서 자주 사용하는 패턴을 공통화.
 */
export function useValue(initialState = ""): [string, OnChangeValue, SetState<string>] {
  const [state, setState] = useState(initialState);

  const onChange: OnChangeValue = event => {
    setState(event.target.value);
  };

  return [state, onChange, setState];
}

type OnChangeChecked = (event: ChangeEvent<Element & { checked: boolean }>) => void;

/**
 * 현재 checked의 값을 상태에 저장하는 hook.
 * `<input/>` 등에서 자주 사용하는 패턴을 공통화.
 */
export function useChecked(initialState = false): [boolean, OnChangeChecked, SetState<boolean>] {
  const [state, setState] = useState(initialState);

  const onChange: OnChangeChecked = event => {
    setState(event.target.checked);
  };

  return [state, onChange, setState];
}
