import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

import AuthAPI from "@/api/AuthAPI";
import UserAPI from "@/api/UserAPI";
import { useStoreDispatch } from "@/store";
import AuthSlice from "@/store/Auth";
import Page from "@/components/page";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

/**
 * 로그인 페이지.
 */
const LoginPage = () => {
  const router = useRouter();
  const dispatch = useStoreDispatch();

  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const onChangeID = (event: ChangeEvent<HTMLInputElement>) => {
    setID(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    await AuthAPI.doLocalLogin({
      email: id,
      password,
    });

    const profile = await UserAPI.getUserProfile();

    dispatch(
      AuthSlice.actions.setSession({
        id: profile.user.id,
        type: profile.user.user_meta.type,
      })
    );

    alert("로그인 성공! 메인 화면으로 돌아갑니다.");
    router.push("/");
  };

  return (
    <Page>
      <input type="text" placeholder="아이디" value={id} onChange={onChangeID} />
      <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
      <div>
        <button type="button" onClick={onClickLogin}>
          로그인
        </button>
      </div>
    </Page>
  );
};

export default LoginPage;
