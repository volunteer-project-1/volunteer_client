// Redux 테스트용으로 만듬 - 구조 바뀔 예정.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Company1 from "@/images/home/company1.jpg";
import Company2 from "@/images/home/company2.jpg";
import Company3 from "@/images/home/company3.jpg";
import Company4 from "@/images/home/company4.jpg";
import Company5 from "@/images/home/company5.jpg";
import Company6 from "@/images/home/company6.jpg";

export interface Company {
  companyImage: StaticImageData;
  description: string;
  // 마감 날짜. (null이면 상시 채용)
  dueDate: number | null;
  isLiked: boolean;
}

const exampleCompanyMap: Record<string, Company> = {
  에스디바이오센서: {
    companyImage: Company1,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
    isLiked: true,
  },
  플랜트코퍼레이션: {
    companyImage: Company2,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
    isLiked: true,
  },
  네이버: {
    companyImage: Company3,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
    isLiked: false,
  },
  "(주) 오픈": {
    companyImage: Company4,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
    isLiked: false,
  },
  현대자동차: {
    companyImage: Company5,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
    isLiked: false,
  },
  한국토지주택공사: {
    companyImage: Company6,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: null,
    isLiked: true,
  },
};

/**
 * 회사 관련 상태들.
 * (테스트용으로 만듬.)
 */
export interface SeekerState {
  companyMap: Record<string, Company>;
}

const initialState: SeekerState = {
  companyMap: exampleCompanyMap,
};

const SeekerSlice = createSlice({
  name: "seeker",
  initialState,
  reducers: {
    // 좋아요 on <-> 좋아요 off.
    toggleCompanyLike: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      state.companyMap[name].isLiked = !state.companyMap[name].isLiked;
    },
  },
});

export default SeekerSlice;
