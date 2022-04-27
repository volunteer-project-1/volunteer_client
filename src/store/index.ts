/**
 * @file Redux store 정의.
 *
 * (1) 상태 추가하기
 * - 별도의 파일에 slice 생성
 * - combinedReducer에 [MySlice.name]: MySlice.reducer 추가
 *
 * (2) 상태 가져오기 / 상태 업데이트
 * - 아래의 useStoreSelector(), useStoreDispatch() 참고
 * - (자료형 체크 때문에, useSelector(), useDispatch() 직접 사용은 비권장!!)
 */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import { isDevelopmentMode } from "@/utils/DebugUtils";
import AuthSlice from "@/store/Auth";
import ResumeSlice from "@/store/Resume";

/**
 * Slice의 reducer들을 하나로 함침.
 */
const combinedReducer = combineReducers({
  [AuthSlice.name]: AuthSlice.reducer,
  [ResumeSlice.name]: ResumeSlice.reducer,
  // [XXXSlice.name]: XXXSlice.reducer,
});

/**
 * 최종 reducer.
 */
const rootReducer: typeof combinedReducer = (state, action) => {
  // Next.js의 SSR을 위한 처리.
  // https://velog.io/@vagabondms/프로젝트-next-redux-wrapper를-사용하여-nextredux-toolkit-연결하기
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }

  return combinedReducer(state, action);
};

/**
 * Redux store.
 */
const store = configureStore({
  reducer: rootReducer,
});

/**
 * Next.js가 Redux store를 여러 개 만드는 것을 방지.
 * https://github.com/kirill-konshin/next-redux-wrapper
 */
export const storeWrapper = createWrapper(context => store, {
  debug: isDevelopmentMode(),
});

/**
 * Type-safe wrapper of useDispatch().
 * 주어진 action을 실행해서 상태를 업데이트.
 *
 * @example
 * const dispatch = useStoreDispatch();
 * dispatch(ExampleSlice.actions.doSomething({ ... }));
 */
export const useStoreDispatch: () => typeof store.dispatch = useDispatch;

/**
 * Type-safe wrapper of useSelector().
 * 현재 상태 또는 상태 기반의 값을 가져옴.
 *
 * @example
 * const value = useStoreSelector(state => state.example.value);
 */
export const useStoreSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
