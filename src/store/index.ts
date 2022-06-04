/**
 * @file Redux store 정의.
 *
 * (1) 상태 추가하기
 * - 별도의 파일에 createReducer(), createSlice() 등을 이용하여 action creator & reducer 생성
 * - 아래의 combinedReducer에 reducer 추가
 *
 * (2) 상태 가져오기 / 상태 업데이트
 * - 아래의 useStoreSelector(), useStoreDispatch() 참고
 * - (자료형 체크 때문에, useSelector(), useDispatch() 직접 사용은 비권장!!)
 */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import { isDevelopmentMode } from "@/utils/DebugUtils";
import uiReducer from "@/store/ui";
import authReducer from "@/store/auth";
import resumeReducer from "@/store/resume";
import companyReducer from "@/store/company";

const ourReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  resume: resumeReducer,
  company: companyReducer,
});

const rootReducer: typeof ourReducer = (state, action) => {
  // Next.js의 SSR을 위한 처리.
  // https://velog.io/@vagabondms/프로젝트-next-redux-wrapper를-사용하여-nextredux-toolkit-연결하기
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }

  // 상태 전체를 업데이트할 때 사용.
  if (action.type === "updateWhole") {
    return { ...state, ...action.payload };
  }

  return ourReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: isDevelopmentMode(),
});

store.subscribe(() => {
  // 브라우저 닫아도 보존해야 할 정보들 저장.
  if (typeof localStorage !== "undefined") {
    const state = store.getState();

    const partToPreserve: Partial<typeof state> = {
      auth: {
        account: state.auth.account,
      },
    };

    localStorage.setItem("state", JSON.stringify(partToPreserve));
  }
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
