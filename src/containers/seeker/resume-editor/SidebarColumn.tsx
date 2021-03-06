import React from "react";

import ResumeAPI from "@/api/ResumeAPI";
import { isExistent, isNonEmpty } from "@/utils/CheckUtils";
import { getResumeTitle } from "@/utils/StringUtils";
import { useRequest } from "@/utils/APIUtils";
import { useStoreSelector } from "@/store";
import Page from "@/components/page";
import StatusBox from "@/components/status-box";
import "@/containers/seeker/resume-editor/SidebarColumn.scoped.scss";

const SidebarColumn = () => {
  const account = useStoreSelector(state => state.auth.account);
  const resumeState = useStoreSelector(state => state.resume);
  const doRequest = useRequest();

  const isResumeInfoFilled =
    // isNonEmpty(resumeState.resumeInfo.avatar) &&
    isNonEmpty(resumeState.resumeInfo.name) &&
    isNonEmpty(resumeState.resumeInfo.birthday) &&
    (isNonEmpty(resumeState.resumeInfo.sido) || isNonEmpty(resumeState.resumeInfo.sigungu));

  const isEducationFilled = resumeState.educations.every(
    education => isNonEmpty(education.type) && isNonEmpty(education.school_name) /*&&
    isNonEmpty(education.graduation_year) &&
    isExistent(education.is_graduated)*/
  );

  const isCareerFilled = resumeState.careers.every(
    career => isNonEmpty(career.company) && isNonEmpty(career.department) /*&&
      isNonEmpty(career.position) &&
      isNonEmpty(career.task) &&
      isNonEmpty(career.joined_at)*/
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

  const isMyVideoFilled = isNonEmpty(resumeState.myVideo.url);

  const isHelperVideoFilled = isNonEmpty(resumeState.helperVideo.url);

  const isIntroductionFilled = resumeState.introductions.every(
    introduction => isNonEmpty(introduction.title) && isNonEmpty(introduction.content)
  );

  const isPreferenceFilled =
    isExistent(resumeState.preference.employ_type) &&
    isExistent(resumeState.preference.salary) &&
    resumeState.preferenceLocations.every(location => isNonEmpty(location.sido) || isNonEmpty(location.sigungu)) &&
    resumeState.preferenceJobs.every(job => isNonEmpty(job.name));

  const isNecessaryFilled = isResumeInfoFilled && isMyVideoFilled;

  const handleClickSubmit = async () => {
    if (!isNecessaryFilled) {
      alert("?????????????????? ???????????????!");
      return;
    }

    if (!account) {
      return;
    }

    const resumes = await ResumeAPI.findMyResumes();
    const resumeTitle = getResumeTitle(account);

    const downloadedResume =
      typeof resumes === "string" ? undefined : resumes.resumes.find(resume => resume.title === resumeTitle);

    if (typeof downloadedResume !== "undefined" && downloadedResume.id) {
      await doRequest(ResumeAPI.deleteResume(downloadedResume.id));
    }

    // resume, resumeInfo, myVideo??? ????????? ???????????? ???.
    // ???????????? optional????????? ??? ??????({})??? ???????????? ?????? ????????? SQL ????????? ???.
    // ????????? ???????????? ????????? ???????????? ?????? ??????.
    await doRequest(
      ResumeAPI.createResume({
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
          url: resumeState.myVideo.url,
        },
        helperVideo: isHelperVideoFilled ? resumeState.helperVideo : undefined,
        preference: isPreferenceFilled
          ? {
              ...resumeState.preference,
              preferenceLocations: resumeState.preferenceLocations,
              preferenceJobs: resumeState.preferenceJobs,
            }
          : undefined,
      })
    );

    alert("????????? ??????/??????????????? ??????????????????!");
  };

  return (
    <Page.Column>
      <StatusBox title="????????? ??????">
        <StatusBox.Category isHighlighted>????????????</StatusBox.Category>
        <StatusBox.Item isNecessary isHighlighted={isResumeInfoFilled}>
          ????????????
        </StatusBox.Item>
        <StatusBox.Item isNecessary isHighlighted={isMyVideoFilled}>
          ???????????????
        </StatusBox.Item>
        <StatusBox.Category>????????????</StatusBox.Category>
        <StatusBox.Item isHighlighted={isEducationFilled}>??????</StatusBox.Item>
        <StatusBox.Item isHighlighted={isCareerFilled}>??????</StatusBox.Item>
        <StatusBox.Item isHighlighted={isActivityFilled}>????????????</StatusBox.Item>
        <StatusBox.Item isHighlighted={isTrainingFilled}>????????????</StatusBox.Item>
        <StatusBox.Item isHighlighted={isCertificateFilled}>?????????</StatusBox.Item>
        <StatusBox.Item isHighlighted={isAwardFilled}>????????????</StatusBox.Item>
        <StatusBox.Item isHighlighted={isPortfolioFilled}>???????????????</StatusBox.Item>
        <StatusBox.Item isHighlighted={isIntroductionFilled}>???????????????</StatusBox.Item>
        <StatusBox.Item isHighlighted={isPreferenceFilled}>??????????????????</StatusBox.Item>
      </StatusBox>
      <button className="submit" onClick={handleClickSubmit}>
        ????????? ????????????
      </button>
    </Page.Column>
  );
};

export default SidebarColumn;
