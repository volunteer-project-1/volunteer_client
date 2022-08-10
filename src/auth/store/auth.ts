import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Account } from "@/common/types/Auth";

/**
 * 로그인 관련 상태.
 */
interface AuthState {
  // null: 로그아웃.
  account: Account | null;
}

const initialState: AuthState = {
  account: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * 로그인 상태 변경.
     */
    setAccount: (state, action: PayloadAction<Account | null>) => {
      state.account = action.payload;
    },
  },
});

export const { setAccount } = authSlice.actions;

export default authSlice.reducer;
