import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import { isDevelopmentMode } from "@/utils/DebugUtils";
import UserSlice from "@/store/User";

/**
 * Slice의 reducer들을 하나로 함침.
 */
const combinedReducer = combineReducers({
  [UserSlice.name]: UserSlice.reducer,
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
 * 주어진 action을 실행.
 *
 * @example
 * const dispatch = useStoreDispatch();
 * dispatch(ExampleSlice.actions.doSomething({ ... }));
 */
export const useStoreDispatch: () => typeof store.dispatch = useDispatch;

/**
 * Type-safe wrapper of useSelector().
 * Store를 바탕으로 원하는 값을 계산.
 *
 * @example
 * const value = useStoreSelector(state => state.example.value);
 */
export const useStoreSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
