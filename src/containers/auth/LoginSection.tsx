import React, { useState } from "react";
import { useRouter } from "next/router";

import ROUTES from "@/constants/Routes";
import { UserType } from "@/types/User";
import { useValue } from "@/utils/StateUtils";
import { strictValues } from "@/utils/TypeUtils";
import { isEmail, isPassword } from "@/utils/StringUtils";
import { dLog } from "@/utils/DebugUtils";
import AuthAPI from "@/api/AuthAPI";
import UserAPI from "@/api/UserAPI";
import { useStoreDispatch } from "@/store";
import { setSession } from "@/store/auth";
import Box from "@/containers/auth/Box";
import TabList from "@/containers/auth/TabList";
import "@/containers/auth/LoginSection.scoped.scss";

const LoginSection = () => {
  const router = useRouter();
  const dispatch = useStoreDispatch();

  const [id, onChangeID] = useValue("");
  const [password, onChangePassword] = useValue("");
  const [userType, setUserType] = useState<UserType>("seeker");

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

    const profile = await UserAPI.findMyProfile();

    dLog(profile);

    dispatch(
      setSession({
        id: profile.user.id,
        type: profile.user.user_meta.type,
      })
    );

    router.push(ROUTES.home);
  };

  return (
    <div className="loginSection">
      <div className="logoArea">
        <img className="logo" src={"/assets/auth/login-logo.svg"} alt="Logo" />
      </div>
      <TabList currentUserType={userType} onChange={setUserType} />
      <Box title="로그인" description="아이디, 패스워드를 입력해주세요.">
        <input className="input" type="text" placeholder="아이디" value={id} onChange={onChangeID} />
        <input className="input" type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
        {id.length > 0 && password.length > 0 && hasWrongFlag && (
          <div className="inputMessage isWrong">
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
