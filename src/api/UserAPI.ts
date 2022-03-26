import API from "@/api/API";
import { seekerList, companyList } from "@/api/DummyDB";

interface UserProfileResponse {
  user: {
    id: number;
    email: string;
    user_meta: {
      id: number;
      type: "company" | "seeker";
      is_verified: number;
    };
  };
}

async function getUserProfile(): Promise<UserProfileResponse> {
  const response = await API.get<UserProfileResponse>("/api/v1/user/profile");
  return response.data;
}

async function getSeekerList() {
  // 서버 데이터로 대체 예정.
  return seekerList;
}

async function getCompanyList() {
  // 서버 데이터로 대체 예정.
  return companyList;
}

const UserAPI = {
  getUserProfile,
  getSeekerList,
  getCompanyList,
};

export default UserAPI;