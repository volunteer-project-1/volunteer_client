import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  Activity,
  Award,
  Career,
  Education,
  HelperVideo,
  MyVideo,
  Preference,
  PreferenceJob,
  PreferenceLocation,
} from "@/types/Resume";

interface ResumeState {
  educations: Array<Partial<Education>>;
  careers: Array<Partial<Career>>;
  activities: Array<Partial<Activity>>;
  awards: Array<Partial<Award>>;
  myVideo: Partial<MyVideo>;
  helperVideo: Partial<HelperVideo>;
  preference: Partial<Preference>;
  preferenceJobs: Array<Partial<PreferenceJob>>;
  preferenceLocation: Partial<PreferenceLocation>;
}

const initialState: ResumeState = {
  educations: [{}],
  careers: [{}],
  activities: [{}],
  awards: [{}],
  myVideo: {},
  helperVideo: {},
  preference: {},
  preferenceJobs: [{}],
  preferenceLocation: {},
};

// 배열 형태의 상태들 / 일반 형태의 상태들을 분류.
type ArrayName = "educations" | "careers" | "activities" | "awards" | "preferenceJobs";
type SingleName = Exclude<keyof ResumeState, ArrayName>;

export interface UpdateArrayItemPayload<Name extends ArrayName> {
  name: Name;
  index: number;
  part: Partial<ResumeState[Name][number]>;
}

export interface UpdateSingleItemPayload<Name extends SingleName> {
  name: Name;
  part: Partial<ResumeState[Name]>;
}

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    /**
     * 배열 형태의 상태에 새 item을 하나 추가.
     */
    addArrayItem: <Name extends ArrayName>(
      state: ResumeState,
      action: PayloadAction<{
        name: Name;
      }>
    ) => {
      state[action.payload.name].push({});
    },
    /**
     * 배열 형태의 상태를 업데이트.
     * index번째 값에 part가 덮어씌워짐.
     */
    updateArrayItem: <Name extends ArrayName>(
      state: ResumeState,
      action: PayloadAction<UpdateArrayItemPayload<Name>>
    ) => {
      state[action.payload.name][action.payload.index] = {
        ...state[action.payload.name][action.payload.index],
        ...action.payload.part,
      };
    },
    /**
     * 일반 형태의 상태를 업데이트.
     * part가 덮어씌워짐.
     */
    updateSingleItem: <Name extends SingleName>(
      state: ResumeState,
      action: PayloadAction<UpdateSingleItemPayload<Name>>
    ) => {
      state[action.payload.name] = {
        ...state[action.payload.name],
        ...action.payload.part,
      };
    },
  },
});

export const { addArrayItem, updateArrayItem, updateSingleItem } = resumeSlice.actions;

export default resumeSlice.reducer;
