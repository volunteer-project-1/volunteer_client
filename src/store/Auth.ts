import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Session } from "@/types/Auth";

/**
 * 로그인 관련 상태.
 */
interface AuthState {
  // null: 로그아웃.
  session: Session | null;
}

const initialState: AuthState = {
  session: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * 로그인 상태 변경.
     */
    setSession(state, action: PayloadAction<Session | null>) {
      state.session = action.payload;
    },
  },
});

export default AuthSlice;
