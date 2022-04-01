/**
 * @file 서버가 올라가기 전까지 사용할 dummy DB들.
 */

import { Seeker, Company } from "@/types/User";

export const seekerList: Array<Seeker> = [
  {
    id: 0,
    name: "박철수",
    imageURL: "/assets/home/seeker1.jpg",
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
    imageURL: "/assets/home/seeker2.jpg",
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
    imageURL: "/assets/home/seeker3.jpg",
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
    imageURL: "/assets/home/seeker4.jpg",
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
];

export const companyList: Array<Company> = [
  {
    id: 0,
    name: "에스디바이오센서",
    imageURL: "/assets/home/company1.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 1,
    name: "플랜트코퍼레이션",
    imageURL: "/assets/home/company2.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 2,
    name: "네이버",
    imageURL: "/assets/home/company3.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 3,
    name: "(주)오픈",
    imageURL: "/assets/home/company4.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 4,
    name: "현대자동차",
    imageURL: "/assets/home/company5.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: new Date("2022-03-01").getTime(),
  },
  {
    id: 5,
    name: "한국토지주택공사",
    imageURL: "/assets/home/company6.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: null,
  },
];
