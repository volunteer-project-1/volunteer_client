import React from "react";

import { dateToString } from "@/utils/DateUtils";
import "@/containers/news/ListSection.scoped.scss";

type NewsType = "채용정보" | "행사정보" | "사업정보" | "봉사정보";

interface News {
  type: NewsType;
  title: string;
  author: string;
  creationDate: Date;
  // visitCount: number;
}

const dummyNewsList: Array<News> = [
  {
    type: "행사정보",
    title: "2022년 동계 미니 패럴림픽 참가신청",
    author: "관리자",
    creationDate: new Date(),
  },
  {
    type: "행사정보",
    title: "2022년 장애인 특수채용 취업 설명회 사전신청",
    author: "관리자",
    creationDate: new Date(),
  },
  {
    type: "행사정보",
    title: "2022년 하계 미니 패럴림픽 참가신청",
    author: "관리자",
    creationDate: new Date(),
  },
  {
    type: "채용정보",
    title: "2021년 국가 자격증 시험 정보",
    author: "관리자",
    creationDate: new Date(),
  },
  {
    type: "사업정보",
    title: "장애인 채용기업 지원사업 신청",
    author: "관리자",
    creationDate: new Date(),
  },
];

const ListSection = () => (
  <div className="listSection">
    <table className="table">
      <thead>
        <tr>
          <th>번호</th>
          <th>구분</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일</th>
          {/* <th>조회수</th> */}
        </tr>
      </thead>
      <tbody>
        {dummyNewsList.map((news, index) => (
          <tr key={news.title}>
            <td>{index + 1}</td>
            <td>{news.type}</td>
            <td className="title">{news.title}</td>
            <td>{news.author}</td>
            <td>{dateToString(news.creationDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ListSection;
