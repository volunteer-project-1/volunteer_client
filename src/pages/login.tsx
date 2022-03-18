import React from "react";

import { useStoreDispatch } from "@/store";
import UserSlice from "@/store/User";
import Page from "@/components/common/Page";
import Header from "@/components/layout/Header";
import { useRouter } from "next/router";

/**
 * 로그인 페이지.
 */
const LoginPage = () => {
  const dispatch = useStoreDispatch();
  const router = useRouter();

  /**
   * 메인 페이지로 돌아감.
   */
  const openHome = () => {
    router.push("/");
  };

  const onClickSeekerLogin = () => {
    dispatch(UserSlice.actions.setSession({ type: "Seeker", id: 0 }));
    openHome();
  };

  const onClickCompanyLogin = () => {
    dispatch(UserSlice.actions.setSession({ type: "Company", id: 0 }));
    openHome();
  };

  const onClickLogout = () => {
    dispatch(UserSlice.actions.setSession(null));
    openHome();
  };

  return (
    <Page>
      <Header />
      <div>테스트 버튼들</div>
      <button type={"button"} onClick={onClickSeekerLogin}>
        [구직자(Seeker)로 로그인]
      </button>
      <button type={"button"} onClick={onClickCompanyLogin}>
        [회사(Company)로 로그인]
      </button>
      <button type={"button"} onClick={onClickLogout}>
        [로그아웃]
      </button>
    </Page>
  );
};

export default LoginPage;
