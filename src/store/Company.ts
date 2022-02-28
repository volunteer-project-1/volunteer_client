// Redux 테스트용으로 만듬 - 구조 바뀔 예정.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Profile1 from "@/images/home/seeker1.jpg";
import Profile2 from "@/images/home/seeker2.jpg";
import Profile3 from "@/images/home/seeker3.jpg";
import Profile4 from "@/images/home/seeker4.jpg";

interface Seeker {
  profileImage: StaticImageData;
  age: number;
  gender: "남" | "여";
  address: string;
  job: string;
  career: string;
  handicap: string;
  isLiked: boolean;
}

export const exampleSeekerMap: Record<string, Seeker> = {
  박철수: {
    profileImage: Profile1,
    age: 35,
    gender: "남",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
    isLiked: true,
  },
  김철수: {
    profileImage: Profile2,
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
    isLiked: true,
  },
  박영희: {
    profileImage: Profile3,
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
    isLiked: false,
  },
  김영희: {
    profileImage: Profile4,
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
    isLiked: false,
  },
};

/**
 * 회사 관련 상태들.
 */
export interface CompanyState {
  seekerMap: Record<string, Seeker>;
}

const initialState: CompanyState = {
  seekerMap: exampleSeekerMap,
};

const CompanySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    // 좋아요 on <-> 좋아요 off.
    toggleSeekerLike: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      state.seekerMap[name].isLiked = !state.seekerMap[name].isLiked;
    },
  },
});

export default CompanySlice;
