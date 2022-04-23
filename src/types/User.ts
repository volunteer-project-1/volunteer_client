import { USER_TYPE } from "@/constants/User";
import { DefaultTime } from "@/types/Common";

export type UserType = typeof USER_TYPE[number];

export interface User extends DefaultTime {
  id: number;
  email: string;
}

export interface UserMeta extends DefaultTime {
  id: number;
  is_verified: boolean;
  type: UserType;
  user_id: number;
}

export interface Profile extends DefaultTime {
  id: number;
  name: string;
  address: string;
  birthday: string;
  user_id: number;
}
