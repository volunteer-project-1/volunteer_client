import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { UserType } from "@/types/User";
import { HTTP_STATUS_CODE } from "@/constants/HTTP";
import ROUTES from "@/constants/Routes";
import UserAPI from "@/api/UserAPI";

interface AuthWrapperProps {
  allowedUserTypes: Array<UserType>;
  children: ReactNode;
}

/**
 * 로그인 되어 있지 않으면 children에 접근하지 못하도록 막는 component.
 */
const AuthWrapper = ({ allowedUserTypes, children }: AuthWrapperProps) => {
  const router = useRouter();
  const [allowAccess, setAllowAccess] = useState(false);

  useEffect(() => {
    (async () => {
      const results = await Promise.all(
        allowedUserTypes.map(async type => {
          try {
            if (type === "seeker") {
              await UserAPI.findMyProfile();
            } else if (type === "company") {
              // TODO: 쓸만한 API 찾기...
            }
          } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === HTTP_STATUS_CODE.UN_AUTHORIZE) {
              return false;
            }
          }

          return true;
        })
      );

      // 하나라도 true 뜬게 있으면 children 접근 허용.
      // 없으면 로그인 페이지로 보내버림.
      if (results.includes(true)) {
        setAllowAccess(true);
      } else {
        alert("권한이 없습니다! 알맞은 모드로 로그인하세요.");
        router.push(ROUTES.auth.login);
      }
    })();
  });

  return allowAccess ? <>{children}</> : null;
};

const Wrapper = {
  Auth: AuthWrapper,
};

export default Wrapper;
