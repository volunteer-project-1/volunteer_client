/**
 * @file 서버가 올라가기 전까지 사용할 dummy DB들.
 */

import { UserID } from "@/models/ID";
import { Company } from "@/models/Company";
import { Seeker } from "@/models/Seeker";

import Profile1 from "@/images/home/seeker1.jpg";
import Profile2 from "@/images/home/seeker2.jpg";
import Profile3 from "@/images/home/seeker3.jpg";
import Profile4 from "@/images/home/seeker4.jpg";

import Company1 from "@/images/home/company1.jpg";
import Company2 from "@/images/home/company2.jpg";
import Company3 from "@/images/home/company3.jpg";
import Company4 from "@/images/home/company4.jpg";
import Company5 from "@/images/home/company5.jpg";
import Company6 from "@/images/home/company6.jpg";

const seekers: Array<Seeker> = [
  {
    id: 0,
    name: "박철수",
    imageURL: Profile1.src,
    age: 35,
    gender: "남",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
  {
    id: 1,
    name: "김철수",
    imageURL: Profile2.src,
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
  {
    id: 2,
    name: "박영희",
    imageURL: Profile3.src,
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
  {
    id: 3,
    name: "김영희",
    imageURL: Profile4.src,
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
];

const companies: Array<Company> = [
  {
    id: 0,
    name: "에스디바이오센서",
    imageURL: Company1.src,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 1,
    name: "플랜트코퍼레이션",
    imageURL: Company2.src,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 2,
    name: "네이버",
    imageURL: Company3.src,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 3,
    name: "(주)오픈",
    imageURL: Company4.src,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 4,
    name: "현대자동차",
    imageURL: Company5.src,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 5,
    name: "한국토지주택공사",
    imageURL: Company6.src,
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: null,
  },
];

/**
 * 구직자 리스트.
 */
export const seekerDB: Record<UserID, Seeker> = {};

/**
 * 각 구직자가 좋아요 누른 회사들의 목록.
 */
export const seekerLikeDB: Record<UserID, Set<UserID>> = {};

seekers.forEach(seeker => {
  seekerDB[seeker.id] = seeker;
  seekerLikeDB[seeker.id] = new Set();
});

/**
 * 회사 리스트.
 */
export const companyDB: Record<UserID, Company> = {};

/**
 * 각 회사가 좋아요 누른 구직자들의 목록.
 */
export const companyLikeDB: Record<UserID, Set<UserID>> = {};

companies.forEach(company => {
  companyDB[company.id] = company;
  companyLikeDB[company.id] = new Set();
});
