import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  Resume,
  ResumeInfo,
  Activity,
  Award,
  Career,
  Education,
  HelperVideo,
  MyVideo,
  Preference,
  PreferenceJob,
  PreferenceLocation,
  Training,
  Introduction,
  Portfolio,
  Certificate,
} from "@/common/types/Resume";
import { AllOptional } from "@/common/types/Common";

interface ResumeState {
  resume: AllOptional<Resume>;
  resumeInfo: AllOptional<ResumeInfo>;
  educations: Array<AllOptional<Education>>;
  careers: Array<AllOptional<Career>>;
  certificates: Array<AllOptional<Certificate>>;
  activities: Array<AllOptional<Activity>>;
  awards: Array<AllOptional<Award>>;
  trainings: Array<AllOptional<Training>>;
  introductions: Array<AllOptional<Introduction>>;
  portfolio: AllOptional<Portfolio>;
  myVideo: AllOptional<MyVideo>;
  helperVideo: AllOptional<HelperVideo>;
  preference: AllOptional<Preference>;
  preferenceJobs: Array<AllOptional<PreferenceJob>>;
  preferenceLocations: Array<AllOptional<PreferenceLocation>>;
}

const initialState: ResumeState = {
  resume: {},
  resumeInfo: {},
  educations: [{}],
  careers: [{}],
  certificates: [{}],
  activities: [{}],
  awards: [{}],
  trainings: [{}],
  introductions: [{}],
  portfolio: {},
  myVideo: {},
  helperVideo: {},
  preference: {},
  preferenceJobs: [{}],
  preferenceLocations: [{}],
};

// 배열 형태의 상태들 / 일반 형태의 상태들을 분류.
type ArrayName =
  | "educations"
  | "careers"
  | "certificates"
  | "activities"
  | "awards"
  | "trainings"
  | "introductions"
  | "preferenceJobs"
  | "preferenceLocations";
type SingleName = Exclude<keyof ResumeState, ArrayName>;

function createArrayItemAdder<Item>(name: ArrayName) {
  return (state: ResumeState) => {
    state[name].push({});
  };
}

function createArrayItemUpdater<Item>(name: ArrayName) {
  return (state: ResumeState, action: PayloadAction<[number, AllOptional<Item>]>) => {
    const [index, item] = action.payload;
    state[name][index] = { ...state[name][index], ...item };
  };
}

function createSingleItemUpdater<Item>(name: SingleName) {
  return (state: ResumeState, action: PayloadAction<AllOptional<Item>>) => {
    state[name] = { ...state[name], ...action.payload };
  };
}

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateWholeResume: (state, action: PayloadAction<AllOptional<ResumeState>>) => {
      Object.assign(state, action.payload);
    },

    updateResume: createSingleItemUpdater<Resume>("resume"),

    updateResumeInfo: createSingleItemUpdater<ResumeInfo>("resumeInfo"),

    addEducation: createArrayItemAdder<Education>("educations"),
    updateEducation: createArrayItemUpdater<Education>("educations"),

    addCareer: createArrayItemAdder<Career>("careers"),
    updateCareer: createArrayItemUpdater<Career>("careers"),

    addCertificate: createArrayItemAdder<Certificate>("certificates"),
    updateCertificate: createArrayItemUpdater<Certificate>("certificates"),

    addActivity: createArrayItemAdder<Activity>("activities"),
    updateActivity: createArrayItemUpdater<Activity>("activities"),

    addAward: createArrayItemAdder<Award>("awards"),
    updateAward: createArrayItemUpdater<Award>("awards"),

    addTraining: createArrayItemAdder<Training>("trainings"),
    updateTraining: createArrayItemUpdater<Training>("trainings"),

    addIntroduction: createArrayItemAdder<Introduction>("introductions"),
    updateIntroduction: createArrayItemUpdater<Introduction>("introductions"),

    updatePortfolio: createSingleItemUpdater<Portfolio>("portfolio"),

    updateMyVideo: createSingleItemUpdater<MyVideo>("myVideo"),

    updateHelperVideo: createSingleItemUpdater<HelperVideo>("helperVideo"),

    updatePreference: createSingleItemUpdater<Preference>("preference"),

    addPreferenceJob: createArrayItemAdder<PreferenceJob>("preferenceJobs"),
    updatePreferenceJob: createArrayItemUpdater<PreferenceJob>("preferenceJobs"),

    addPreferenceLocation: createArrayItemAdder<PreferenceLocation>("preferenceLocations"),
    updatePreferenceLocation: createArrayItemUpdater<PreferenceLocation>("preferenceLocations"),
  },
});

export const {
  updateWholeResume,
  updateResume,
  updateResumeInfo,
  addEducation,
  updateEducation,
  addCareer,
  updateCareer,
  addCertificate,
  updateCertificate,
  addActivity,
  updateActivity,
  addAward,
  updateAward,
  addTraining,
  updateTraining,
  addIntroduction,
  updateIntroduction,
  updatePortfolio,
  updateMyVideo,
  updateHelperVideo,
  updatePreference,
  addPreferenceJob,
  updatePreferenceJob,
  addPreferenceLocation,
  updatePreferenceLocation,
} = resumeSlice.actions;

export default resumeSlice.reducer;
