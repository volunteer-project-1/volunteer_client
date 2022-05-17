import { ACCOUNT_TYPE } from "@/constants/Auth";

export type AccountType = typeof ACCOUNT_TYPE[number];

/**
 * 로그인 상태.
 */
export interface Account {
  id: number;
  type: AccountType;
}
