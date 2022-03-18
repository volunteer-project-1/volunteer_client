import { UserID } from "@/models/ID";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * 로그인 상태.
 */
interface Session {
  type: "Company" | "Seeker";
  id: UserID;
}

/**
 * 사용자 관련 상태.
 */
interface UserState {
  // null: 로그아웃.
  session: Session | null;
}

const initialState: UserState = {
  session: null,
};

const UserSlice = createSlice({
  name: "user",
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

export default UserSlice;
