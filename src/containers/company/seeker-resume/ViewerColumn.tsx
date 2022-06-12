import React from "react";

import Page from "@/components/page";
import "@/containers/company/seeker-resume/ViewerColumn.scoped.scss";

const ViewerColumn = () => (
  <Page.Column fill>
    <div className="viewer">
      <div className="infoSection">
        <img className="avatar" src="/assets/company/seeker-resume-avatar.jpg" alt="avatar" />
        <div className="others">
          <div className="row">
            <span className="name">김 철 수</span>
            <span className="sex">남</span>
            <span className="birthday">1992.01.30</span>
            <span className="age">31세</span>
          </div>
          <div className="row">
            <span className="disability">시각장애 1급</span>
          </div>
          <div className="row">
            <span className="phoneNumber">
              <span className="tag">연락처</span>
              010.1234.4567
            </span>
          </div>
          <div className="row">
            <span className="email">
              <span className="tag">이메일</span>
              chulsoo23@naver.com
            </span>
          </div>
          <div className="row">
            <span className="address">
              <span className="tag">주소</span>
              서울시 강남구 반포동 삼성아파트 101동 1004호
            </span>
          </div>
        </div>
      </div>
      <div className="myVideoSection">
        <div className="sectionTitle">나를 소개합니다.</div>
        <video className="video" src={"/assets/home/mypage-video.mp4"} controls>
          <track kind="captions" />
        </video>
      </div>
      <div className="helperVideoSection">
        <div className="sectionTitle">대신 소개해드려요.</div>
        <video className="video" src={"/assets/home/mypage-video.mp4"} controls>
          <track kind="captions" />
        </video>
      </div>
      <div className="educationSection">
        <div className="sectionTitle">학력</div>
        <table className="table">
          <tbody>
            <tr className="tableRow">
              <td className="tableColumn">
                2012-2015
                <br />
                졸업
              </td>
              <td className="tableColumnFill">
                <span className="schoolName">강남대학교</span> <span className="major">영상편집학과</span>
                <br />
                학점 4.3/4.5
              </td>
            </tr>
            <tr className="tableRow">
              <td className="tableColumn">
                2011
                <br />
                졸업
              </td>
              <td className="tableColumnFill">
                <span className="schoolName">강남고등학교</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="careerSection">
        <div className="sectionTitle">경력</div>
        <table className="table">
          <tbody>
            <tr className="tableRow">
              <td className="tableColumn">2016-재직중</td>
              <td className="tableColumnFill">
                <span className="company">비비랩 에이전시</span> <span className="position">영상팀 사원</span>
                <br />
                <span className="task">영상편집</span>
                <br />
                <span className="careerOthers">연봉&nbsp;&nbsp;|&nbsp;&nbsp;3,000만원</span>
                <br />
                <span className="careerOthers">
                  주요직무&nbsp;&nbsp;|&nbsp;&nbsp;영상편집 담당, 영상 자료관리및 유지 보수
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="certificateSection">
        <div className="sectionTitle">자격증</div>
        <table className="table">
          <tbody>
            <tr className="tableRow">
              <td className="tableColumn">GTQ 그래픽 자격증</td>
              <td className="tableColumn">한국산업인력공단</td>
              <td className="tableColumnFill">2021.11.13</td>
            </tr>
            <tr className="tableRow">
              <td className="tableColumn">미술치료사 1급</td>
              <td className="tableColumn">산업통상자원부</td>
              <td className="tableColumnFill">2021.11.13</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="preferenceSection">
        <div className="sectionTitle">희망 근무조건</div>
        <table className="table">
          <tbody>
            <tr className="tableRow">
              <td className="tableColumn">고용형태</td>
              <td className="tableColumnFill">정규직, 계약직</td>
            </tr>
            <tr className="tableRow">
              <td className="tableColumn">희망연봉</td>
              <td className="tableColumnFill">4,000만원 이상</td>
            </tr>
            <tr className="tableRow">
              <td className="tableColumn">희망 근무지</td>
              <td className="tableColumnFill">
                <span className="tableItem">서울시 서초구 서초동</span>
                <span className="tableItem">서울시 강남구 역삼동</span>
                <span className="tableItem">서울시 강서구 염창동</span>
              </td>
            </tr>
            <tr className="tableRow">
              <td className="tableColumn">희망직종</td>
              <td className="tableColumnFill">
                <span className="tableItem">영상 디자인</span>
                <span className="tableItem">영상 편집</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Page.Column>
);

export default ViewerColumn;
