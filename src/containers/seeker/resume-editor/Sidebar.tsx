import React from "react";

import { isExistent, isNonEmpty } from "@/utils/CheckUtils";
import { useStoreSelector } from "@/store";
import StatusBox from "@/components/status-box";
import "@/containers/seeker/resume-editor/Sidebar.scoped.scss";
import ResumeAPI from "@/api/ResumeAPI";

const Sidebar = () => {
  const account = useStoreSelector(state => state.auth.account);
  const resumeState = useStoreSelector(state => state.resume);

  const isResumeInfoFilled =
    isNonEmpty(resumeState.resumeInfo.name) &&
    isNonEmpty(resumeState.resumeInfo.birthday) &&
    (isNonEmpty(resumeState.resumeInfo.sido) || isNonEmpty(resumeState.resumeInfo.sigungu));

  const isEducationFilled = resumeState.educations.every(
    education =>
      isNonEmpty(education.type) &&
      isNonEmpty(education.school_name) &&
      isNonEmpty(education.graduation_year) &&
      isExistent(education.is_graduated)
  );

  const isCareerFilled = resumeState.careers.every(
    career =>
      isNonEmpty(career.company) &&
      isNonEmpty(career.department) &&
      isNonEmpty(career.position) &&
      isNonEmpty(career.task) &&
      isNonEmpty(career.joined_at)
  );

  const isActivityFilled = resumeState.activities.every(
    activity => isNonEmpty(activity.organization) && isNonEmpty(activity.description)
  );

  const isTrainingFilled = resumeState.trainings.every(
    training =>
      isNonEmpty(training.name) &&
      isNonEmpty(training.institute) &&
      isNonEmpty(training.started_at) &&
      isNonEmpty(training.finished_at) &&
      isNonEmpty(training.content)
  );

  const isCertificateFilled = resumeState.certificates.every(
    certificate => isNonEmpty(certificate.name) && isNonEmpty(certificate.institute)
  );

  const isAwardFilled = resumeState.awards.every(award => isNonEmpty(award.institute) && isNonEmpty(award.started_at));

  const isPortfolioFilled = isNonEmpty(resumeState.portfolio.url);

  const isIntroductionFilled = resumeState.introductions.every(
    introduction => isNonEmpty(introduction.title) && isNonEmpty(introduction.content)
  );

  const isNecessaryFilled = isResumeInfoFilled;

  const handleClickSubmit = async () => {
    if (!isNecessaryFilled) {
      alert("필수사항들을 채워주세요!");
      return;
    }

    if (!account) {
      return;
    }

    const resumes = await ResumeAPI.findMyResumes();
    const resumeTitle = `Resume-2022-05-21-15-20-${account.id}`;

    const downloadedResume =
      typeof resumes === "string" ? undefined : resumes.resumes.find(resume => resume.title === resumeTitle);

    if (typeof downloadedResume === "undefined") {
      // resume, resumeInfo, myVideo는 필수로 들어가야 함.
      // 나머지는 optional이지만 빈 객체({})가 들어가면 서버 쪽에서 SQL 에러가 남.
      // 따라서 나머지는 완전히 채워졌을 때만 전송.
      await ResumeAPI.createResume({
        resume: {
          title: resumeTitle,
        },
        resumeInfo: resumeState.resumeInfo,
        educations: isEducationFilled ? resumeState.educations : undefined,
        careers: isCareerFilled ? resumeState.careers : undefined,
        activities: isActivityFilled ? resumeState.activities : undefined,
        trainings: isTrainingFilled ? resumeState.trainings : undefined,
        certificates: isCertificateFilled ? resumeState.certificates : undefined,
        awards: isAwardFilled ? resumeState.awards : undefined,
        portfolio: isPortfolioFilled ? resumeState.portfolio : undefined,
        introductions: isIntroductionFilled ? resumeState.introductions : undefined,
        myVideo: {
          // TODO: 비디오 업로드 구현.
          url: "http://abc.mp4",
        },
        helperVideo: {
          // TODO: 비디오 업로드 구현.
          url: "http://abc.mp4",
        },
        // TODO: 이 부분 구현.
        preference: undefined,
      });
      alert("이력서 생성에 성공했습니다!");
    } else {
      // TODO: 이미 생성된 이력서를 업데이트.
    }
  };

  return (
    <div className="sidebar">
      <StatusBox title="이력서 항목">
        <StatusBox.Category isHighlighted>필수사항</StatusBox.Category>
        <StatusBox.Item isNecessary isHighlighted={isResumeInfoFilled}>
          인적사항
        </StatusBox.Item>
        <StatusBox.Item isNecessary>영상이력서</StatusBox.Item>
        <StatusBox.Category>선택사항</StatusBox.Category>
        <StatusBox.Item isHighlighted={isEducationFilled}>학력</StatusBox.Item>
        <StatusBox.Item isHighlighted={isCareerFilled}>경력</StatusBox.Item>
        <StatusBox.Item isHighlighted={isActivityFilled}>대외활동</StatusBox.Item>
        <StatusBox.Item isHighlighted={isTrainingFilled}>교육이수</StatusBox.Item>
        <StatusBox.Item isHighlighted={isCertificateFilled}>자격증</StatusBox.Item>
        <StatusBox.Item isHighlighted={isAwardFilled}>수상경력</StatusBox.Item>
        <StatusBox.Item isHighlighted={isPortfolioFilled}>포트폴리오</StatusBox.Item>
        <StatusBox.Item isHighlighted={isIntroductionFilled}>자기소개서</StatusBox.Item>
        <StatusBox.Item>희망근무사항</StatusBox.Item>
      </StatusBox>
      <button className="submit" onClick={handleClickSubmit}>
        이력서 제출하기
      </button>
    </div>
  );
};

export default Sidebar;
