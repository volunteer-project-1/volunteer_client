import { useUID } from "react-uid";

import { Account } from "@/common/types/Auth";

/**
 * Element에 id를 붙여야 할 때 사용.
 * 적절한 id를 하나 생성해줌.
 */
export function useID() {
  const uid = useUID();
  return `seeme-${uid}`;
}

/**
 * 이력서의 제목을 생성.
 * 현재 이력서의 제목이 이력서의 key처럼 사용되는데, 또 이걸 표현할 UI는 딱히 없어
 * 적당히 생성.
 */
export function getResumeTitle(account: Account) {
  return `Resume-${account.email}`;
}
