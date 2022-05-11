import { UserType } from "@/types/User";

/**
 * 로그인 상태.
 */
export interface Session {
  id: number;
  type: UserType;
}
