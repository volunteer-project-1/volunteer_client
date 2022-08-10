import React from "react";

import { dateToString } from "@/common/utils/MathUtils";
import "@/news/containers/ListSection.scoped.scss";

type NewsType = "채용정보" | "행사정보" | "사업정보" | "봉사정보";

interface News {
  type: NewsType;
  title: string;
  author: string;
  creationDate: Date;
  url: string;
  // visitCount: number;
}

const dummyNewsList: Array<News> = [
  {
    type: "행사정보",
    title: "2022년 동계 미니 패럴림픽 참가신청",
    author: "관리자",
    creationDate: new Date(),
    url: "https://www.paralympic.org/",
  },
  {
    type: "행사정보",
    title: "2022년 장애인 특수채용 취업 설명회 사전신청",
    author: "관리자",
    creationDate: new Date(),
    url: "https://job.seoul.go.kr/jobable/board.do?method=selectCenterNewsList",
  },
  {
    type: "행사정보",
    title: "2022년 하계 미니 패럴림픽 참가신청",
    author: "관리자",
    creationDate: new Date(),
    url: "https://www.paralympic.org/",
  },
  {
    type: "채용정보",
    title: "2021년 국가 자격증 시험 정보",
    author: "관리자",
    creationDate: new Date(),
    url: "https://www.q-net.or.kr/crf021.do?id=crf02103&gSite=Q&gId=&CST_ID=CRF_Stns_06",
  },
  {
    type: "사업정보",
    title: "장애인 채용기업 지원사업 신청",
    author: "관리자",
    creationDate: new Date(),
    url: "https://www.kead.or.kr/view/service/service04_02_01.jsp?sub2=1",
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
            <td className="title">
              <a className="link" href={news.url}>
                {news.title}
              </a>
            </td>
            <td>{news.author}</td>
            <td>{dateToString(news.creationDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ListSection;
