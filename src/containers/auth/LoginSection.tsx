import React, { useState } from "react";
import { useRouter } from "next/router";

import ROUTES from "@/constants/Routes";
import { AccountType } from "@/types/Auth";
import { useValue } from "@/utils/StateUtils";
import { strictValues } from "@/utils/TypeUtils";
import { dError } from "@/utils/DebugUtils";
import { isEmail, isPassword } from "@/utils/CheckUtils";
import { useLogin, useRequest } from "@/utils/APIUtils";
import Box from "@/containers/auth/Box";
import TabList from "@/containers/auth/TabList";
import "@/containers/auth/LoginSection.scoped.scss";

const LoginSection = () => {
  const router = useRouter();
  const doLogin = useLogin();
  const doRequest = useRequest();

  const [id, onChangeID] = useValue("");
  const [password, onChangePassword] = useValue("");
  const [accountType, setAccountType] = useState<AccountType>("seeker");

  const flags = {
    isIDRight: isEmail(id),
    isPasswordRight: isPassword(password),
  };

  const hasWrongFlag = strictValues(flags).includes(false);

  const handleClickLogin = async () => {
    if (hasWrongFlag) {
      return;
    }

    try {
      await doRequest(doLogin({ id, password, accountType }), { checkAuth: false });
      // 성공했으면 메인 페이지로 이동.
      router.push(ROUTES.home);
    } catch (error) {
      dError(error);
      alert("로그인에 실패했습니다! 아이디, 비밀번호가 안 맞거나, 이미 로그인 되어있습니다! 다시 시도해주세요.");
    }
  };

  return (
    <div className="loginSection">
      <div className="logoArea">
        <img className="logo" src={"/assets/auth/login-logo.svg"} alt="Logo" />
      </div>
      <TabList currentAccountType={accountType} onChange={setAccountType} />
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
