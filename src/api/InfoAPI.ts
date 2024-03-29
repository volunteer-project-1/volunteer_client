import { Seeker, Company } from "@/types/Info";

const seekerList: Array<Seeker> = [
  {
    id: 0,
    name: "박철수",
    imageURL: "/assets/home/seeker1.jpg",
    age: 35,
    sex: "남",
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
    sex: "여",
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
    sex: "여",
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
    sex: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
];

const dummyDate = new Date();
dummyDate.setDate(dummyDate.getDate() + 10);

const companyList: Array<Company> = [
  {
    id: 0,
    name: "에스디바이오센서",
    imageURL: "/assets/home/company1.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: dummyDate.getTime(),
  },
  {
    id: 1,
    name: "플랜트코퍼레이션",
    imageURL: "/assets/home/company2.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: dummyDate.getTime(),
  },
  {
    id: 2,
    name: "네이버",
    imageURL: "/assets/home/company3.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: dummyDate.getTime(),
  },
  {
    id: 3,
    name: "(주)오픈",
    imageURL: "/assets/home/company4.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: dummyDate.getTime(),
  },
  {
    id: 4,
    name: "현대자동차",
    imageURL: "/assets/home/company5.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: dummyDate.getTime(),
  },
  {
    id: 5,
    name: "한국토지주택공사",
    imageURL: "/assets/home/company6.jpg",
    description: "2022년 상반기 각 부문별 정기 경력/신입 공채",
    dueDate: null,
  },
];

async function getSeekerList(): Promise<Array<Seeker>> {
  // 서버 데이터로 대체 예정.
  return seekerList;
}

async function getCompanyList(): Promise<Array<Company>> {
  // 서버 데이터로 대체 예정.
  return companyList;
}

const InfoAPI = {
  getSeekerList,
  getCompanyList,
};

export default InfoAPI;
