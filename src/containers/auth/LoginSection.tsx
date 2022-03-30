import React from "react";
import { useRouter } from "next/router";

import { useValue } from "@/utils/StateUtils";
import { strictValues } from "@/utils/TypeUtils";
import { isEmail, isPassword } from "@/utils/StringUtils";
import AuthAPI from "@/api/AuthAPI";
import UserAPI from "@/api/UserAPI";
import { useStoreDispatch } from "@/store";
import AuthSlice from "@/store/Auth";
import Box from "@/containers/auth/Box";
import "@/containers/auth/LoginSection.scoped.scss";
import Logo from "@/images/auth/login-logo.svg";

const LoginSection = () => {
  const router = useRouter();
  const dispatch = useStoreDispatch();

  const [id, onChangeID] = useValue("");
  const [password, onChangePassword] = useValue("");

  const flags = {
    isIDRight: isEmail(id),
    isPasswordRight: isPassword(password),
  };

  const hasWrongFlag = strictValues(flags).includes(false);

  const onClickLogin = async () => {
    if (hasWrongFlag) {
      return;
    }

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
      <div className="logoArea">
        <img className="logo" src={Logo.src} alt="Logo" />
      </div>
      <Box title="로그인" description="아이디, 패스워드를 입력해주세요.">
        <input className="textForm" type="text" placeholder="아이디" value={id} onChange={onChangeID} />
        <input
          className="textForm"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        {id.length > 0 && password.length > 0 && hasWrongFlag && (
          <div className="textFormMessage isWrong">
            이메일 또는 비밀번호가 잘못 입력 되었습니다.
            <br />
            이메일과 비밀번호를 정확히 입력해 주세요.
          </div>
        )}
        <button className="submitButton" type="button" onClick={onClickLogin}>
          로그인
        </button>
      </Box>
    </div>
  );
};

export default LoginSection;
