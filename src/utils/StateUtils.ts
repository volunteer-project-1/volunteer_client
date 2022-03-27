import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

/**
 * <input/>, <textarea/> 등을 사용할 때 자주 사용하는 패턴.
 *
 * @param initialState 입력값의 초기값
 * @returns [현재 상태, event handler, 상태 setter]
 */
type StateHook<State, Target extends Element> = (
  initialState: State
) => [State, (event: ChangeEvent<Target>) => void, Dispatch<SetStateAction<State>>];

/**
 * 현재 value의 값을 상태에 저장하는 hook.
 */
export const useValue: StateHook<string, HTMLInputElement | HTMLTextAreaElement> = (initialState = "") => {
  const [state, setState] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState(event.target.value);
  };

  return [state, onChange, setState];
};

/**
 * 현재 checked의 값을 상태에 저장하는 hook.
 */
export const useChecked: StateHook<boolean, HTMLInputElement> = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
  };

  return [state, onChange, setState];
};
