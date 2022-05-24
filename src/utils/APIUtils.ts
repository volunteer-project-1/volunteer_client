import axios from "axios";

import { AccountType } from "@/types/Auth";
import { HTTP_STATUS_CODE } from "@/constants/HTTP";
import AuthAPI from "@/api/AuthAPI";
import { useStoreDispatch } from "@/store";
import { setAccount } from "@/store/auth";
import { setLoading } from "@/store/ui";

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
 * API 호출 시 로딩 및 에러 처리.
 */
export function useRequest() {
  const dispatch = useStoreDispatch();

  return async <Output>(job: Promise<Output>) => {
    try {
      dispatch(setLoading(true));
      const output = await job;
      dispatch(setLoading(false));
      return output;
    } catch (error) {
      dispatch(setLoading(false));

      // 에러들을 사용처에서 처리할 수 있게 rethrow.
      throw error;
    }
  };
}
