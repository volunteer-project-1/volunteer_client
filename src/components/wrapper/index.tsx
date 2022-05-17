import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AccountType } from "@/types/Auth";
import ROUTES from "@/constants/Routes";
import { useStoreSelector } from "@/store";

interface AuthWrapperProps {
  allowedAccountTypes: Array<AccountType>;
  children: ReactNode;
}

/**
 * 로그인 되어 있지 않으면 children에 접근하지 못하도록 막는 component.
 */
const AuthWrapper = ({ allowedAccountTypes, children }: AuthWrapperProps) => {
  const router = useRouter();
  const [allowAccess, setAllowAccess] = useState(false);

  const account = useStoreSelector(state => state.auth.account);

  useEffect(() => {
    if (account !== null && allowedAccountTypes.includes(account.type)) {
      setAllowAccess(true);
    } else {
      alert(`권한이 없습니다! 알맞은 모드로 로그인하세요.`);
      router.push(ROUTES.auth.login);
    }
  }, [account, allowedAccountTypes, router]);

  return allowAccess ? <>{children}</> : null;
};

const Wrapper = {
  Auth: AuthWrapper,
};

export default Wrapper;
