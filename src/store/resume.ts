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
} from "@/types/Resume";

interface ResumeState {
  resume: Partial<Resume>;
  resumeInfo: Partial<ResumeInfo>;
  educations: Array<Partial<Education>>;
  careers: Array<Partial<Career>>;
  certificates: Array<Partial<Certificate>>;
  activities: Array<Partial<Activity>>;
  awards: Array<Partial<Award>>;
  trainings: Array<Partial<Training>>;
  introductions: Array<Partial<Introduction>>;
  portfolio: Partial<Portfolio>;
  myVideo: Partial<MyVideo>;
  helperVideo: Partial<HelperVideo>;
  preference: Partial<Preference>;
  preferenceJobs: Array<Partial<PreferenceJob>>;
  preferenceLocation: Partial<PreferenceLocation>;
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
  preferenceLocation: {},
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
  | "preferenceJobs";
type SingleName = Exclude<keyof ResumeState, ArrayName>;

function createArrayItemAdder<Item>(name: ArrayName) {
  return (state: ResumeState) => {
    state[name].push({});
  };
}

function createArrayItemUpdater<Item>(name: ArrayName) {
  return (state: ResumeState, action: PayloadAction<[number, Partial<Item>]>) => {
    const [index, item] = action.payload;
    state[name][index] = { ...state[name][index], ...item };
  };
}

function createSingleItemUpdater<Item>(name: SingleName) {
  return (state: ResumeState, action: PayloadAction<Partial<Item>>) => {
    state[name] = { ...state[name], ...action.payload };
  };
}

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
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

    updatePreference: createSingleItemUpdater<Preference>("preference"),

    addPreferenceJob: createArrayItemAdder<PreferenceJob>("preferenceJobs"),
    updatePreferenceJob: createArrayItemUpdater<PreferenceJob>("preferenceJobs"),
  },
});

export const {
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
  updatePreference,
  addPreferenceJob,
  updatePreferenceJob,
} = resumeSlice.actions;

export default resumeSlice.reducer;
