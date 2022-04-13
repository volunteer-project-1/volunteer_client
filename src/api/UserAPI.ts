import { Company, Seeker } from "@/types/User";
import API from "@/api/API";
import { seekerList, companyList } from "@/api/DummyDB";

interface GetUserProfileOutput {
  user: {
    id: number;
    email: string;
    user_meta: {
      id: number;
      type: "seeker" | "company";
      is_verified: number;
    };
  };
}

async function getUserProfile(): Promise<GetUserProfileOutput> {
  const response = await API.get<GetUserProfileOutput>("/api/v1/user/profile");
  return response.data;
}

async function getSeekerList(): Promise<Array<Seeker>> {
  // 서버 데이터로 대체 예정.
  return seekerList;
}

async function getCompanyList(): Promise<Array<Company>> {
  // 서버 데이터로 대체 예정.
  return companyList;
}

const UserAPI = {
  getUserProfile,
  getSeekerList,
  getCompanyList,
};

export default UserAPI;
