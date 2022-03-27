import React from "react";
import { useRouter } from "next/router";

import { useValue } from "@/utils/StateUtils";
import AuthAPI from "@/api/AuthAPI";
import UserAPI from "@/api/UserAPI";
import { useStoreDispatch } from "@/store";
import AuthSlice from "@/store/Auth";
import Box from "@/containers/auth/Box";
import "@/containers/auth/LoginSection.scoped.scss";

const LoginSection = () => {
  const router = useRouter();
  const dispatch = useStoreDispatch();

  const [id, onChangeID] = useValue("");
  const [password, onChangePassword] = useValue("");

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
    <div className="loginSection">
      <Box title="로그인" description="아이디, 패스워드를 입력해주세요.">
        <input className="textForm" type="text" placeholder="아이디" value={id} onChange={onChangeID} />
        <input
          className="textForm"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <button className="submitButton" type="button" onClick={onClickLogin}>
          로그인
        </button>
      </Box>
    </div>
  );
};

export default LoginSection;
