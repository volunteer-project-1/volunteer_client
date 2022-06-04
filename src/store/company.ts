import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AllOptional } from "@/types/Common";
import { Company, CompanyHistory, JdStep, JobDescription, JobDetail, Welfare, WorkCondition } from "@/types/Company";

interface CompanyState {
  company: AllOptional<Company>;
  companyHistory: AllOptional<CompanyHistory>;
  jobDescription: AllOptional<JobDescription>;
  jdDetails: Array<AllOptional<JobDetail>>;
  jdWorkCondition: AllOptional<WorkCondition>;
  jdSteps: Array<AllOptional<JdStep>>;
  jdWelfares: Array<AllOptional<Welfare>>;
}

const initialState: CompanyState = {
  company: {},
  companyHistory: {},
  jobDescription: {},
  jdDetails: [{}],
  jdWorkCondition: {},
  jdSteps: [{}],
  jdWelfares: [{}],
};

// 배열 형태의 상태들 / 일반 형태의 상태들을 분류.
type ArrayName = "jdDetails" | "jdSteps" | "jdWelfares";
type SingleName = Exclude<keyof CompanyState, ArrayName>;

function createArrayItemAdder<Item>(name: ArrayName) {
  return (state: CompanyState) => {
    state[name].push({});
  };
}

function createArrayItemUpdater<Item>(name: ArrayName) {
  return (state: CompanyState, action: PayloadAction<[number, AllOptional<Item>]>) => {
    const [index, item] = action.payload;
    state[name][index] = { ...state[name][index], ...item };
  };
}

function createSingleItemUpdater<Item>(name: SingleName) {
  return (state: CompanyState, action: PayloadAction<AllOptional<Item>>) => {
    state[name] = { ...state[name], ...action.payload };
  };
}

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    updateCompany: createSingleItemUpdater<Company>("company"),

    updateCompanyHistory: createSingleItemUpdater<CompanyHistory>("companyHistory"),

    updateJobDescription: createSingleItemUpdater<JobDescription>("jobDescription"),

    addJdDetail: createArrayItemAdder<JobDetail>("jdDetails"),
    updateJdDetail: createArrayItemUpdater<JobDetail>("jdDetails"),

    updateJdWorkCondition: createSingleItemUpdater<WorkCondition>("jdWorkCondition"),

    addJdStep: createArrayItemAdder<JdStep>("jdSteps"),
    updateJdStep: createArrayItemUpdater<JdStep>("jdSteps"),

    addJdWelfare: createArrayItemAdder<Welfare>("jdWelfares"),
    updateJdWelfare: createArrayItemUpdater<Welfare>("jdWelfares"),
  },
});

export const {
  updateCompany,
  updateCompanyHistory,
  updateJobDescription,
  addJdDetail,
  updateJdDetail,
  updateJdWorkCondition,
  addJdStep,
  updateJdStep,
  addJdWelfare,
  updateJdWelfare,
} = companySlice.actions;

export default companySlice.reducer;
