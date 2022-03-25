import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

import AuthAPI from "@/api/AuthAPI";
import Page from "@/components/page";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

/**
 * 회원가입 페이지.
 */
const JoinPage = () => {
  const router = useRouter();

  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeID = (event: ChangeEvent<HTMLInputElement>) => {
    setID(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangePasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
  };

  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const onClickJoin = async () => {
    await AuthAPI.doLocalJoin({
      email: id,
      password,
      passwordConfirm,
    });

    alert("회원가입 성공! 로그인 화면으로 이동합니다.");
    router.push("/auth/login");
  };

  return (
    <Page>
      <Header />
      <div>
        <input type="text" placeholder="아이디" value={id} onChange={onChangeID} />
        <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
        <input type="password" placeholder="비밀번호 확인" value={passwordConfirm} onChange={onChangePasswordConfirm} />
        <input type="password" placeholder="닉네임 (구현 예정)" value={nickname} onChange={onChangeNickname} disabled />
        <div>
          <button type="button" onClick={onClickJoin}>
            회원가입
          </button>
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default JoinPage;
