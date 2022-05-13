import React, { useState } from "react";
import classNames from "classnames";

import "@/containers/notice/FAQ.scoped.scss";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: FAQProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleClickQuestion = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="faq">
      <button className="question" type="button" onClick={handleClickQuestion}>
        {question}
        <img
          className={classNames("foldIcon", {
            isOpen,
          })}
          src="/assets/notice/fold.svg"
          alt="접기 및 펴기"
        />
      </button>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default FAQ;
