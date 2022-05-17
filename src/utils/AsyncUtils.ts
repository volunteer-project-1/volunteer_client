import axios from "axios";
import { useRouter } from "next/router";

import { HTTP_STATUS_CODE } from "@/constants/HTTP";
import ROUTES from "@/constants/Routes";
import { dError } from "@/utils/DebugUtils";

export function useAsyncUtils() {
  const router = useRouter();

  async function handleCommonErrors<T>(job: () => Promise<T>) {
    try {
      return await job();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case HTTP_STATUS_CODE.UN_AUTHORIZE:
            alert("권한이 없습니다! 알맞은 모드로 로그인하세요.");
            router.push(ROUTES.auth.login);
            dError(error.stack);
            return null;
          case HTTP_STATUS_CODE.INTERNAL_SERVER:
            alert("서버에서 에러가 발생했습니다! 관리자에게 문의해주세요.");
            dError(error.stack);
            return null;
          case HTTP_STATUS_CODE.NOT_FOUND:
          case HTTP_STATUS_CODE.BAD_REQUEST:
            alert("잘못된 동작입니다! 관리자에게 문의해주세요.");
            dError(error.stack);
            return null;
        }
      }

      throw error;
    }
  }

  return { handleCommonErrors };
}
