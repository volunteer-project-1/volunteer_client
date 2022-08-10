import React, { useState } from "react";
import classNames from "classnames";

import { strictFromEntries, strictValues } from "@/common/utils/TypeUtils";
import FAQ from "@/notice/containers/FAQ";
import "@/notice/containers/FAQSection.scoped.scss";

const tagNames = [
  "가입절차",
  "아이디분실",
  "비밀번호 분실",
  // "사이트 이용",
  // "기타사항"
] as const;

type Tag = typeof tagNames[number];

interface FAQ {
  tag: Tag;
  question: string;
  answer: string;
}

const faqs: Array<FAQ> = [
  {
    tag: "가입절차",
    question: "가입 승인까지 소요되는 시간은 어느 정도인가요?",
    answer: "영업일 기준으로 48시간 이내 승인 완료됩니다. 최대한 신속하게 처리해드릴게요.",
  },
  {
    tag: "아이디분실",
    question: "아이디를 분실했을 때는 어떻게 하나요?",
    answer: "아이디 찾기 기능을 추가할 예정입니다.",
  },
  {
    tag: "비밀번호 분실",
    question: "비밀번호를 분실했을 때는 어떻게 하나요?",
    answer: "비밀번호 찾기 기능을 추가할 예정입니다.",
  },
  {
    tag: "비밀번호 분실",
    question: "회원가입때 기입했던 이메일 주소를 잃어버렸는데 어떻게 해야하나요?",
    answer: "이메일 찾기 기능을 추가할 예정입니다.",
  },
  {
    tag: "가입절차",
    question: "가입에 제한이 있는 업종이 있을까요?",
    answer: "없습니다.",
  },
  {
    tag: "가입절차",
    question: "사업체가 여러 개일 경우에는 가입을 따로 해야 하나요?",
    answer: "네 그렇습니다.",
  },
];

const FAQSection = () => {
  const [showTag, setShowTag] = useState(strictFromEntries(tagNames.map(tag => [tag, false])));

  const areAllTagsFalse = !strictValues(showTag).includes(true);

  return (
    <div className="faqSection">
      <div className="filterArea">
        {tagNames.map(tag => (
          <button
            key={tag}
            className={classNames("filterButton", {
              isActive: showTag[tag],
            })}
            type="button"
            onClick={() => {
              setShowTag({
                ...showTag,
                [tag]: !showTag[tag],
              });
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="content">
        {faqs.map(
          faq =>
            (areAllTagsFalse || showTag[faq.tag]) && (
              <FAQ key={faq.question} question={`[${faq.tag}] ${faq.question}`} answer={faq.answer} />
            )
        )}
      </div>
    </div>
  );
};

export default FAQSection;
