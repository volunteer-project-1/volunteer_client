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
        <div className="table">
          <div className="tableRow">
            <div className="tableColumn">2012-2015</div>
            <div className="tableColumnFill">강남대학교</div>
          </div>
          <div className="tableRow">
            <div className="tableColumn">2012-2015</div>
            <div className="tableColumnFill">강남대학교</div>
          </div>
        </div>
      </div>
      <div className="careerSection">
        <div className="sectionTitle">경력</div>
        <div className="table">
          <div className="tableRow">
            <div className="tableColumn">2012-2015</div>
            <div className="tableColumnFill">강남대학교</div>
          </div>
          <div className="tableRow">
            <div className="tableColumn">2012-2015</div>
            <div className="tableColumnFill">강남대학교</div>
          </div>
        </div>
      </div>
      <div className="certificateSection">
        <div className="sectionTitle">자격증</div>
        <div className="table">
          <div className="tableRow">
            <div className="tableColumn">GTQ 그래픽 자격증</div>
            <div className="tableColumn">한국산업인력공단</div>
            <div className="tableColumn">2021.11.13</div>
          </div>
          <div className="tableRow">
            <div className="tableColumn">GTQ 그래픽 자격증</div>
            <div className="tableColumn">한국산업인력공단</div>
            <div className="tableColumn">2021.11.13</div>
          </div>
        </div>
      </div>
      <div className="preferenceSection">
        <div className="sectionTitle">희망 근무조건</div>
        <div className="table">
          <div className="tableRow">
            <div className="tableColumn">고용형태</div>
            <div className="tableColumnFill">정규직, 계약직</div>
          </div>
          <div className="tableRow">
            <div className="tableColumn">희망연봉</div>
            <div className="tableColumnFill">4,000만원 이상</div>
          </div>
          <div className="tableRow">
            <div className="tableColumn">희망 근무지</div>
            <div className="tableColumnFill">
              <span className="tableItem">서울시 서초구 서초동</span>
              <span className="tableItem">서울시 강남구 역삼동</span>
              <span className="tableItem">서울시 강서구 염창동</span>
            </div>
          </div>
          <div className="tableRow">
            <div className="tableColumn">희망직종</div>
            <div className="tableColumnFill">
              <span className="tableItem">영상 디자인</span>
              <span className="tableItem">영상 편집</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page.Column>
);

export default ViewerColumn;
