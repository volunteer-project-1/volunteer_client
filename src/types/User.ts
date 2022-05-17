import { DefaultTime } from "@/types/Common";
import { AccountType } from "@/types/Auth";

export interface User extends DefaultTime {
  id: number;
  email: string;
}

export interface UserMeta extends DefaultTime {
  id: number;
  is_verified: boolean;
  type: AccountType;
  user_id: number;
}

export interface Profile extends DefaultTime {
  id: number;
  name: string;
  address: string;
  birthday: string;
  user_id: number;
}
