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

  const handleClickLogin = async () => {
    if (hasWrongFlag) {
      return;
    }

    await AuthAPI.doLocalLogin({
      email: id,
      password,
    });

    const profile = await UserAPI.getUserProfile();

    // TODO: 테스트 서버에 type 변경 내용 반영 시 없어질 예정.
    const userTypeMap = {
      employee: "seeker",
      employer: "company",
    } as const;

    dispatch(
      AuthSlice.actions.setSession({
        id: profile.user.id,
        type: userTypeMap[profile.user.user_meta.type],
      })
    );

    router.push("/");
  };

  return (
    <div className="loginSection">
      <div className="logoArea">
        <img className="logo" src={"/assets/auth/login-logo.svg"} alt="Logo" />
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
        <button className="submitButton" type="button" onClick={handleClickLogin}>
          로그인
        </button>
      </Box>
    </div>
  );
};

export default LoginSection;
