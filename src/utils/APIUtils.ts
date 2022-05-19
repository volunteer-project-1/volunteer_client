import axios from "axios";
import { useRouter } from "next/router";

import { AccountType } from "@/types/Auth";
import { HTTP_STATUS_CODE } from "@/constants/HTTP";
import ROUTES from "@/constants/Routes";
import AuthAPI from "@/api/AuthAPI";
import { useStoreDispatch } from "@/store";
import { setAccount } from "@/store/auth";

/**
 * 로그아웃 후 상태에 반영하는 함수를 반환.
 */
export function useLogout() {
  const dispatch = useStoreDispatch();

  return async () => {
    await AuthAPI.logout();
    dispatch(setAccount(null));
  };
}

/**
 * 로그인 시도 후 성공 시 상태에 반영하고 메인 페이지로 이동하고,
 * 실패 시 몇몇 처리들을 해주는 함수를 반환.
 */
export function useLogin() {
  const dispatch = useStoreDispatch();
  const doLogout = useLogout();

  return async (args: { id: string; password: string; accountType: AccountType }) => {
    try {
      if (args.accountType === "seeker") {
        const output = await AuthAPI.loginSeeker({
          email: args.id,
          password: args.password,
        });

        dispatch(
          setAccount({
            id: output.id,
            type: args.accountType,
          })
        );
      } else {
        const output = await AuthAPI.loginCompany({
          email: args.id,
          password: args.password,
        });

        dispatch(
          setAccount({
            id: output.id,
            type: args.accountType,
          })
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case HTTP_STATUS_CODE.UN_AUTHORIZE:
            // 강제 로그아웃을 시켜서 중복 로그인일 경우에 다음 시도에는 로그인 되도록 함.
            await doLogout();
            break;
        }
      }

      // 에러들을 사용처에서 처리할 수 있게 rethrow.
      throw error;
    }
  };
}

/**
 * 회원가입을 시도하는 함수를 반환.
 */
export function useJoin() {
  return async (args: {
    id: string;
    password: string;
    passwordConfirm: string;
    name: string;
    accountType: AccountType;
  }) => {
    if (args.accountType === "seeker") {
      await AuthAPI.createSeeker({
        email: args.id,
        password: args.password,
        passwordConfirm: args.passwordConfirm,
      });
    } else {
      await AuthAPI.createCompany({
        email: args.id,
        password: args.password,
        passwordConfirm: args.passwordConfirm,
        name: args.name,
      });
    }
  };
}

/**
 * 일반적인 API 호출 시 발생할 수 있는 문제들 중 몇몇을 관리.
 */
export function useRequest<Output>(job: () => Promise<Output>) {
  const router = useRouter();

  return async () => {
    try {
      return await job();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case HTTP_STATUS_CODE.UN_AUTHORIZE:
            alert("권한이 없습니다! 알맞은 모드로 로그인하세요.");
            // 로그인 페이지로 강제로 보냄.
            router.push(ROUTES.auth.login);
        }
      }

      // 에러들을 사용처에서 처리할 수 있게 rethrow.
      throw error;
    }
  };
}
