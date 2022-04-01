import React from "react";

import { useChecked, useValue } from "@/utils/StateUtils";
import Checkbox from "@/containers/home/Checkbox";
import TopButton from "@/containers/home/TopButton";
import "@/containers/home/ContactSection.scoped.scss";

/**
 * 사용자가 입력한 것들.
 */
interface Inputs {
  // 이름.
  name: string;
  // 연락처.
  contact: string;
  // 이메일.
  email: string;
  // 문의사항.
  question: string;
}

/**
 * 사용자가 체크한 것들.
 */
interface Checks {
  // 개인정보 취급방침.
  privacy: boolean;
}

const ContactSection = () => {
  const [name, onChangeName] = useValue("");
  const [contact, onChangeContact] = useValue("");
  const [email, onChangeEmail] = useValue("");
  const [question, onChangeQuestion] = useValue("");
  const [privacy, onChangePrivacy] = useChecked(false);

  const onClickSend = () => {
    alert(JSON.stringify({ name, contact, email, question, privacy }, null, 2));
  };

  return (
    <div className="contactSection">
      <img className="background" src={"/assets/home/contact-background.jpg"} alt={"Background"} />
      <div className="content">
        <div className="aboutColumn">
          <div>
            <div className="aboutTitle">Contact us!</div>
            <div className="aboutDescription">
              언제든 궁금한 점이 있으면 연락주세요.
              <br />
              언제나 답변해드립니다.
            </div>
          </div>
        </div>
        <div className="formColumn">
          <div className="formTitle">사용자 정보</div>
          <div className="formLabel">이름</div>
          <input className="textFieldForm" type={"text"} value={name} onChange={onChangeName} />
          <div className="formLabel">연락처</div>
          <input className="textFieldForm" type={"text"} value={contact} onChange={onChangeContact} />
          <div className="formLabel">메일주소</div>
          <input className="textFieldForm" type={"email"} value={email} onChange={onChangeEmail} />
          <div className="formLabel">문의사항</div>
          <textarea className="textAreaForm" rows={5} value={question} onChange={onChangeQuestion} />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="formInlineLabel">
            <Checkbox checked={privacy} onChange={onChangePrivacy} />
            개인정보 취급방침 동의
            <img className="foldButton" src={"/assets/home/contact-fold.svg"} alt={"Fold"} />
          </label>
          <div className="sendRow">
            <button className="sendButton" type={"button"} onClick={onClickSend}>
              보내기
            </button>
            <TopButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
