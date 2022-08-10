import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * UI 관련 상태.
 * ex. API 호출 등 진행중이면 상호작용 막는다던가 이럴 때 씀.
 */
interface UIState {
  // API 호출 등이 진행중이면 true.
  isLoading: boolean;
}

const initialState: UIState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
