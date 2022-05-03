import React from "react";

import { useChecked, useValue } from "@/utils/StateUtils";
import { useID } from "@/utils/StringUtils";
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

  const nameID = useID();
  const contactID = useID();
  const emailID = useID();
  const questionID = useID();
  const privacyID = useID();

  const handleClickSend = () => {
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
          <label className="label" htmlFor={nameID}>
            이름
          </label>
          <input className="input" id={nameID} type={"text"} value={name} onChange={onChangeName} />
          <label className="label" htmlFor={contactID}>
            연락처
          </label>
          <input className="input" id={contactID} type={"text"} value={contact} onChange={onChangeContact} />
          <label className="label" htmlFor={emailID}>
            메일주소
          </label>
          <input className="input" id={emailID} type={"email"} value={email} onChange={onChangeEmail} />
          <label className="label" htmlFor={questionID}>
            문의사항
          </label>
          <textarea className="textArea" rows={5} value={question} onChange={onChangeQuestion} />
          <div className="privacyRow">
            <Checkbox id={privacyID} checked={privacy} onChange={onChangePrivacy} />
            <label className="label" htmlFor={privacyID}>
              개인정보 취급방침 동의
            </label>
            <img className="foldButton" src={"/assets/home/contact-fold.svg"} alt={"접기 및 펴기"} />
          </div>
          <div className="sendRow">
            <button className="sendButton" type={"button"} onClick={handleClickSend}>
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
