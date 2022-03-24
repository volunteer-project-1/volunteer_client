import { ChangeEvent, useState } from "react";

import Checkbox from "@/components/home/Checkbox";
import TopButton from "@/components/home/TopButton";
import styles from "@/components/home/ContactSection.module.scss";
import Background from "@/images/home/contact-background.jpg";
import Fold from "@/images/home/contact-fold.svg";

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
  const [inputs, setInputs] = useState<Inputs>({ name: "", contact: "", email: "", question: "" });
  const [checks, setChecks] = useState<Checks>({ privacy: false });

  const onChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: keyof Inputs) => {
    setInputs({ ...inputs, [key]: event.target.value });
  };

  const onChangeCheck = (event: ChangeEvent<HTMLInputElement>, key: keyof Checks) => {
    setChecks({ ...checks, [key]: event.target.checked });
  };

  const onClickSend = () => {
    alert(JSON.stringify({ inputs, checks }, null, 2));
  };

  return (
    <div className={styles.contactSection}>
      <img className={styles.background} src={Background.src} alt={"Background"} />
      <div className={styles.content}>
        <div className={styles.aboutColumn}>
          <div>
            <div className={styles.aboutTitle}>Contact us!</div>
            <div className={styles.aboutDescription}>
              언제든 궁금한 점이 있으면 연락주세요.
              <br />
              언제나 답변해드립니다.
            </div>
          </div>
        </div>
        <div className={styles.formColumn}>
          <div className={styles.formTitle}>사용자 정보</div>
          <div className={styles.formLabel}>이름</div>
          <input
            className={styles.textFieldForm}
            type={"text"}
            value={inputs.name}
            onChange={event => {
              onChangeInput(event, "name");
            }}
          />
          <div className={styles.formLabel}>연락처</div>
          <input
            className={styles.textFieldForm}
            type={"text"}
            value={inputs.contact}
            onChange={event => {
              onChangeInput(event, "contact");
            }}
          />
          <div className={styles.formLabel}>메일주소</div>
          <input
            className={styles.textFieldForm}
            type={"email"}
            value={inputs.email}
            onChange={event => {
              onChangeInput(event, "email");
            }}
          />
          <div className={styles.formLabel}>문의사항</div>
          <textarea
            className={styles.textAreaForm}
            rows={5}
            value={inputs.question}
            onChange={event => {
              onChangeInput(event, "question");
            }}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={styles.formInlineLabel}>
            <Checkbox
              className={styles.checkboxForm}
              checked={checks.privacy}
              onChange={event => {
                onChangeCheck(event, "privacy");
              }}
            />
            개인정보 취급방침 동의
            <img className={styles.foldButton} src={Fold.src} alt={"Fold"} />
          </label>
          <div className={styles.sendRow}>
            <button className={styles.sendButton} type={"button"} onClick={onClickSend}>
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