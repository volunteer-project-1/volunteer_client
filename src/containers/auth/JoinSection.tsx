import React, { useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

import ROUTES from "@/constants/Routes";
import { AccountType } from "@/types/Auth";
import { dError } from "@/utils/DebugUtils";
import { useValue } from "@/utils/StateUtils";
import { strictValues } from "@/utils/TypeUtils";
import { isEmail, isPassword } from "@/utils/CheckUtils";
import { useJoin, useLogin, useRequest } from "@/utils/APIUtils";
import Dialog from "@/components/dialog";
import Box from "@/containers/auth/Box";
import TabList from "@/containers/auth/TabList";
import "@/containers/auth/JoinSection.scoped.scss";

const JoinSection = () => {
  const router = useRouter();
  const doJoin = useJoin();
  const doLogin = useLogin();
  const doRequest = useRequest();

  // TODO: 현재는 id = 이메일 주소인데, 다른 것도 허용할지는 논의 예정.
  const [id, onChangeID] = useValue("");
  const [password, onChangePassword] = useValue("");
  const [passwordConfirm, onChangePasswordConfirm] = useValue("");
  const [name, onChangeName] = useValue("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [accountType, setAccountType] = useState<AccountType>("seeker");

  const flags = {
    isIDRight: isEmail(id),
    isPasswordRight: isPassword(password),
    isPasswordConfirmRight: password === passwordConfirm,
    isNicknameRight: name.length > 0,
  };

  const hasWrongFlag = strictValues(flags).includes(false);

  const handleClickJoin = async () => {
    if (hasWrongFlag) {
      return;
    }

    try {
      await doRequest(doJoin({ id, password, passwordConfirm, name, accountType }), { checkAuth: false });
    } catch (error) {
      dError(error);
      alert("회원가입 중 에러가 발생했습니다! 이미 가입된 아이디일 수 있습니다.");
      router.push(ROUTES.auth.login);
      return;
    }

    try {
      await doLogin({ id, password, accountType });
      setDialogOpen(true);
    } catch (error) {
      dError(error);
      alert("자동 로그인에 실패했습니다! 직접 로그인을 해주세요.");
      router.push(ROUTES.auth.login);
      return;
    }
  };

  const handleCloseDialog = async () => {
    setDialogOpen(false);
  };

  const handleClickYes = async () => {
    setDialogOpen(false);

    if (accountType === "seeker") {
      router.push(ROUTES.seeker.resumeEditor);
    } else {
      router.push(ROUTES.company.infoEditor);
    }
  };

  const handleClickNo = async () => {
    setDialogOpen(false);
    router.push(ROUTES.home);
  };

  return (
    <div className="joinSection">
      <TabList currentAccountType={accountType} onChange={setAccountType} />
      <div className="content">
        <Box title="회원가입" description="간단한 절차를 통해 가입하실수 있습니다. 함께 해주셔서 감사합니다!">
          <input
            className={classNames("input", {
              isWrong: id.length > 0 && !flags.isIDRight,
            })}
            type="text"
            placeholder="이메일"
            value={id}
            onChange={onChangeID}
          />
          {id.length > 0 && (
            <div
              className={classNames("inputMessage", {
                isWrong: !flags.isIDRight,
              })}
            >
              {flags.isIDRight ? "사용 가능한 이메일 입니다." : "사용 불가능한 이메일 입니다."}
            </div>
          )}
          <input
            className="input"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          {password.length > 0 && !flags.isPasswordRight && (
            <div className="inputMessage isWrong">대문자, 소문자, 숫자, 기호 포함하여 10자 이상으로 입력해주세요.</div>
          )}
          <input
            className="input"
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
          {passwordConfirm.length > 0 && !flags.isPasswordConfirmRight && (
            <div className="inputMessage isWrong">비밀번호가 일치하지 않습니다.</div>
          )}
          <input
            className="input"
            type="text"
            placeholder={accountType === "seeker" ? "닉네임" : "회사명"}
            value={name}
            onChange={onChangeName}
          />
          <button className="submitButton" type="button" onClick={handleClickJoin}>
            회원가입 하기
          </button>
        </Box>
        <div className="backgroundArea">
          <img className="backgroundImage" src={"/assets/auth/join-background.jpg"} alt="Background" />
        </div>
        <Dialog disableBackdropClick disableEscapeKey isOpen={isDialogOpen} onClose={handleCloseDialog}>
          <img className="successIcon" src={"/assets/auth/join-success.svg"} alt="Success" />
          <Dialog.Content title="회원가입을 축하드립니다!">
            회원가입이 완료되었습니다. See me에 오신것을 환영합니다.
          </Dialog.Content>
          <Dialog.Footer>
            <Dialog.Button fill onClick={handleClickYes}>
              예. {accountType === "seeker" ? "이력서" : "회사정보"} 작성할래요.
            </Dialog.Button>
            <Dialog.Button onClick={handleClickNo}>아니요. 나중에 할래요.</Dialog.Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    </div>
  );
};

export default JoinSection;
