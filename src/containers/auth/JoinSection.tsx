import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

import AuthAPI from "@/api/AuthAPI";
import Box from "@/containers/auth/Box";
import "@/containers/auth/JoinSection.scoped.scss";

import Background from "@/images/auth/join-background.jpg";

const JoinSection = () => {
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
    <div className="joinSection">
      <Box title="회원가입" description="간단한 절차를 통해 가입하실수 있습니다. 함께 해주셔서 감사합니다!">
        <input className="textForm" type="text" placeholder="아이디" value={id} onChange={onChangeID} />
        <input
          className="textForm"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <input
          className="textForm"
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
        <input
          className="textForm"
          type="password"
          placeholder="닉네임 (구현 예정)"
          value={nickname}
          onChange={onChangeNickname}
          disabled
        />
        <button className="submitButton" type="button" onClick={onClickJoin}>
          회원가입 하기
        </button>
      </Box>
      <div className="backgroundArea">
        <img className="backgroundImage" src={Background.src} alt="Background" />
      </div>
    </div>
  );
};

export default JoinSection;
