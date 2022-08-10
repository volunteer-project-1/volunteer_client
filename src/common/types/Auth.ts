import { ACCOUNT_TYPE } from "@/common/constants/Auth";

export type AccountType = typeof ACCOUNT_TYPE[number];

/**
 * 로그인 상태.
 */
export interface Account {
  type: AccountType;
  email: string;
}
