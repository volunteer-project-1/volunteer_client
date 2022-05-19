import { dLog } from "@/utils/DebugUtils";

/**
 * 주소 입력을 받을 때 사용하는 함수.
 */
function readAddress() {
  return new Promise<{ sido: string; sigungu: string }>((resolve, reject) => {
    dLog("주소 찾기 여는 중...");

    const popup = new (window as any).daum.Postcode({
      oncomplete: (data: any) => {
        resolve({
          sido: data.sido ?? "",
          sigungu: data.sigungu ?? "",
        });
      },
    });

    popup.open();
  });
}

const ExternalAPI = { readAddress };

export default ExternalAPI;
