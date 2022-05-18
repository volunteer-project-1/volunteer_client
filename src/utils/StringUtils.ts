import { useUID } from "react-uid";

import { dLog } from "@/utils/DebugUtils";

/**
 * Element에 id를 붙여야 할 때 사용.
 * 적절한 id를 하나 생성해줌.
 */
export function useID() {
  const uid = useUID();
  return `seeme-${uid}`;
}

/**
 * 주소 입력을 받을 때 사용하는 함수.
 */
export function readAddress(onRead: (args: { sido: string; sigungu: string }) => void) {
  dLog("주소 찾기 여는 중...");

  const popup = new (window as any).daum.Postcode({
    oncomplete: (data: any) => {
      onRead({
        sido: data.sido ?? "",
        sigungu: data.sigungu ?? "",
      });
    },
  });

  popup.open();
}
