import React from "react";
import { useRouter } from "next/router";

import { useValue } from "@/utils/StateUtils";
import { strictValues } from "@/utils/TypeUtils";
import { isEmail, isPassword } from "@/utils/StringUtils";
import AuthAPI from "@/api/AuthAPI";
import Box from "@/containers/auth/Box";
import "@/containers/auth/JoinSection.scoped.scss";
import Background from "@/images/auth/join-background.jpg";
import classNames from "classnames";

const JoinSection = () => {
  const router = useRouter();

  // TODO: 현재는 id = 이메일 주소인데, 다른 것도 허용할지는 논의 예정.
  const [id, onChangeID] = useValue("");
  const [password, onChangePassword] = useValue("");
  const [passwordConfirm, onChangePasswordConfirm] = useValue("");
  const [nickname, onChangeNickname] = useValue("");

  const flags = {
    isIDRight: isEmail(id),
    isPasswordRight: isPassword(password),
    isPasswordConfirmRight: password === passwordConfirm,
  };

  const hasWrongFlag = strictValues(flags).includes(false);

  const onClickJoin = async () => {
    if (hasWrongFlag) {
      return;
    }

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
        <input
          className={classNames("textForm", {
            isWrong: id.length > 0 && !flags.isIDRight,
          })}
          type="text"
          placeholder="이메일"
          value={id}
          onChange={onChangeID}
        />
        {id.length > 0 && (
          <div
            className={classNames("textFormMessage", {
              isWrong: !flags.isIDRight,
            })}
          >
            {flags.isIDRight ? "사용 가능한 이메일 입니다." : "사용 불가능한 이메일 입니다."}
          </div>
        )}
        <input
          className="textForm"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        {password.length > 0 && !flags.isPasswordRight && (
          <div className="textFormMessage isWrong">대문자, 소문자, 숫자, 기호 포함하여 10자 이상으로 입력해주세요.</div>
        )}
        <input
          className="textForm"
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
        {passwordConfirm.length > 0 && !flags.isPasswordConfirmRight && (
          <div className="textFormMessage isWrong">비밀번호가 일치하지 않습니다.</div>
        )}
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
