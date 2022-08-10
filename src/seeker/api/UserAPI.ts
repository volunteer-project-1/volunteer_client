import { User, Profile, UserMeta } from "@/common/types/User";
import API from "@/common/api/API";

interface FindMyProfileOutput {
  user: Omit<User, "created_at" | "updated_at"> & {
    profile: Omit<Profile, "created_at" | "updated_at">;
    user_meta: Omit<UserMeta, "created_at" | "updated_at">;
  };
}

async function findMyProfile(): Promise<FindMyProfileOutput> {
  const response = await API.get<FindMyProfileOutput>("/api/v1/user/profile");
  return response.data;
}

const UserAPI = {
  findMyProfile,
};

export default UserAPI;
