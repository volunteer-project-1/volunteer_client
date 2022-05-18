import axios from "axios";
import { useRouter } from "next/router";

import { HTTP_STATUS_CODE } from "@/constants/HTTP";
import ROUTES from "@/constants/Routes";
import { dError } from "@/utils/DebugUtils";
import AuthAPI from "@/api/AuthAPI";
import { useStoreDispatch } from "@/store";
import { setAccount } from "@/store/auth";

export function useAsyncUtils() {
  const router = useRouter();
  const dispatch = useStoreDispatch();

  /**
   * 로그인 시 발생할 수 있는 문제들 중 몇몇을 관리.
   */
  async function handleLoginErrors<T>(job: () => Promise<T>) {
    try {
      return await job();
    } catch (error) {
      // 원래는 로그인 되어 있으면 로그인 페이지에 들어올 일이 없지만,
      // 혹시나 어케어케 들어와서 로그인 시도 하여 중복 로그인 에러가 나면 강제 로그아웃.
      if (axios.isAxiosError(error) && error.response?.status === HTTP_STATUS_CODE.UN_AUTHORIZE) {
        await AuthAPI.logout();
        dispatch(setAccount(null));
      }

      throw error;
    }
  }

  /**
   * 일반적인 API 호출 시 발생할 수 있는 문제들 중 몇몇을 관리.
   */
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

  return { handleLoginErrors, handleCommonErrors };
}
