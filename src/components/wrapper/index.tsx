import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AccountType } from "@/types/Auth";
import ROUTES from "@/constants/Routes";
import { useStoreSelector } from "@/store";
import Dialog from "@/components/dialog";
import "@/components/wrapper/Wrapper.scoped.scss";

interface RenderingWrapperProps {
  // true이면 children에 대해 CSR(Client-Side Rendering)만 사용함.
  forceCSR: boolean;
  children: ReactNode;
}

const RenderingWrapper = ({ forceCSR, children }: RenderingWrapperProps) => {
  // SSR 중이면 false, CSR 중이면 true.
  const [isClient, setClient] = useState(false);

  const renderChildren = !forceCSR || isClient;

  useEffect(() => {
    setClient(true);
  }, []);

  return <>{renderChildren && children}</>;
};

interface LoadingWrapperProps {
  children: ReactNode;
}

/**
 * 뭔가 로딩 중이면 사용자의 상호작용을 막는 component.
 */
const LoadingWrapper = ({ children }: LoadingWrapperProps) => {
  const isLoading = useStoreSelector(state => state.ui.isLoading);

  const handleCloseDialog = () => {
    // Do nothing.
  };

  return (
    <>
      {children}
      <Dialog disableBackdropClick disableEscapeKey isOpen={isLoading} onClose={handleCloseDialog}>
        <img className="loadingIcon" src={"/assets/layout/loading-logo.svg"} alt="Success" />
        <Dialog.Content title="Loading...">잠시만 기다려 주세요.</Dialog.Content>
      </Dialog>
    </>
  );
};

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
      alert("권한이 없습니다! 알맞은 모드로 로그인하세요.");
      router.push(ROUTES.auth.login);
    }
  }, [account, allowedAccountTypes, router]);

  return allowAccess ? <>{children}</> : null;
};

const Wrapper = {
  Rendering: RenderingWrapper,
  Loading: LoadingWrapper,
  Auth: AuthWrapper,
};

export default Wrapper;
