import React from "react";
import Link from "next/link";

import "@/containers/seeker/company-info/InfoSection.scoped.scss";

const InfoSection = () => (
  <div className="infoSection">
    <div className="box">
      <div className="boxTitle">기업소개</div>
      <div className="introduction">
        비모소프트는 &quot;사용하기 쉬운 하이퀄리티 소프트웨어&quot;를 만드는 기업입니다.
        <br />
        국내 동영상 편집 어플 1위 VLLO를 서비스하고 있으며, 전 세계 약 220개국에 진출하여 글로벌 기업으로 도약하고
        있습니다.
        <br />
        <br />
        VLLO는 2015&2017년도 App store 올해의 앱 선정, 2019년도 Google play 올해의 앱 선정, 2020년도 국내 동영상 편집
        어플 순위 1위 달성, 2021년도 단일 앱 월 매출 5.5억원 돌파하는 등 지속적인 성장세를 보이고 있습니다.
        <br />
        <br />
        비모소프트는 고객에게 사용하기 쉽고 퀄리티 좋은 소프트웨어를 제공합니다.
        <br />
        동영상 편집 어플 VLLO를 넘어, 가치 있는 소프트웨어를 함께 만들어 갈 유능한 인재를 모집합니다.
        <br />
        비모소프트와 함께 성장하고 싶다면, 지금 바로 지원해 주세요.
        <br />
        <br />
        <ul>
          <li>
            비모소프트 공식홈페이지&nbsp;
            <Link href="https://www.vllo.io">
              <a>www.vllo.io</a>
            </Link>
          </li>
          <li>
            비모소프트 채용홈페이지&nbsp;
            <Link href="https://www.notion.so/VLLOeaa1c413a4c241daa9478ce4e98fd5d9">
              <a>Notion</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="box">
      <div className="boxTitle">기업정보</div>
      <table className="table">
        <tbody>
          <tr className="tableRow">
            <td className="tableColumn">설립일</td>
            <td className="tableColumn">2015-09-10 / 7년차</td>
          </tr>
          <tr className="tableRow">
            <td className="tableColumn">구성원</td>
            <td className="tableColumnFill">11-50명</td>
          </tr>
          <tr className="tableRow">
            <td className="tableColumn">투자유치</td>
            <td className="tableColumnFill">누적 20억 원 이상</td>
          </tr>
          <tr className="tableRow">
            <td className="tableColumn">홈페이지</td>
            <td className="tableColumnFill">http://www.vimosoft.com</td>
          </tr>
          <tr className="tableRow">
            <td className="tableColumn">전화번호</td>
            <td className="tableColumnFill">031-425-4587</td>
          </tr>
          <tr className="tableRow">
            <td className="tableColumn">주소</td>
            <td className="tableColumnFill">
              비모소프트 경기도 안양시 동안구 시민대로 327번길 11-35 엠투아이코퍼레이션 4층 비모소프트{" "}
            </td>
          </tr>
          <tr className="tableRow">
            <td className="tableColumn">산업분야</td>
            <td className="tableColumnFill">IT, 모바일앱, 앱, ios, android, 동영상편집어플, vllo</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="box">
      <div className="boxTitle">모집분야 및 자격요건</div>
      <table className="jobTable">
        <tbody>
          <tr className="tableRow">
            <th className="tableColumn">모집분야</th>
            <th className="tableColumnFill">담당업무</th>
            <th className="tableColumnFill">자격요건</th>
            <th className="tableColumnFill">우대사항</th>
          </tr>
          <tr className="tableRow">
            <td className="tableColumn">
              하이브리드 앱
              <br />
              개발자 채용
            </td>
            <td className="tableColumn">
              <ul>
                <li>비모스포트의 하이브리드 App 제작 & 사용자 화면 개발</li>
                <li>안드로이드 및 iOS 인앱결제 구현</li>
                <li>사용자 수입/결제 데이터의 API 연동</li>
                <li>유저 업무 성향분석 Chart/Graph 개발</li>
                <li>사용자의 위치검색 기능 구현 [GPS 연동]</li>
              </ul>
            </td>
            <td className="tableColumn">
              <ul>
                <li>Android/iOS Mobile App Hybrid App 실무개발 경험</li>
                <li>App 개발 및 배포 경험</li>
                <li>APP STORE/Google Play Store에서 실제 서비스 중인 App, Web 개발 경험</li>
                <li>Android/iOS App 개발이 가능한 중급 레벨 이상</li>
                <li>Front-end 개발경험 (HTML, JavaScript, CSS)</li>
              </ul>
            </td>
            <td className="tableColumn">
              <ul>
                <li>PL (Project Leader) 경험자</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="box">
      <div className="boxTitle">근무조건</div>
      <ul>
        <li>근무형태: 정규직 (수습 3개월)</li>
        <li>근무시간: 주 5일 (월-금) / 9:00 ~ 18:00</li>
        <li>근무장소 : 서울시 서초사옥 (남부터미널역 3번출구 500m이내)</li>
      </ul>
    </div>
    <div className="box">
      <div className="boxTitle">전형절차</div>
      <div className="process">
        <div className="iconArea">
          STEP 01
          <img src="/assets/seeker/company-info-process-1.svg" alt="Process" />
        </div>
        <div className="label">서류전형</div>
      </div>
      <div className="process">
        <div className="iconArea">
          STEP 02
          <img src="/assets/seeker/company-info-process-3.svg" alt="Process" />
        </div>
        <div className="label">실무면접</div>
      </div>
      <div className="process">
        <div className="iconArea">
          STEP 03
          <img src="/assets/seeker/company-info-process-3.svg" alt="Process" />
        </div>
        <div className="label">임원면접</div>
      </div>
      <div className="process">
        <div className="iconArea">
          STEP 04
          <img src="/assets/seeker/company-info-process-4.svg" alt="Process" />
        </div>
        <div className="label">최종합격</div>
      </div>
      <ul>
        <li>서류 합격자에 한해 개별적으로 연락드릴 예정입니다.</li>
      </ul>
    </div>
  </div>
);

export default InfoSection;
