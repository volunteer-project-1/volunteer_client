import React, { useEffect } from "react";

import { Optional } from "@/common/types/Common";
import ResumeAPI from "@/seeker/api/ResumeAPI";
import { getResumeTitle } from "@/common/utils/StringUtils";
import { dLog } from "@/common/utils/DebugUtils";
import { useRequest } from "@/common/utils/APIUtils";
import { useStoreDispatch, useStoreSelector } from "@/common/store";
import { updateWholeResume } from "@/seeker/store/resume";
import Page from "@/layout/containers/Page";
// import TitleSection from "@/seeker/containers/resume-editor/TitleSection";
import InfoSection from "@/seeker/containers/resume-editor/InfoSection";
import MyVideoSection from "@/seeker/containers/resume-editor/MyVideoSection";
import HelperVideoSection from "@/seeker/containers/resume-editor/HelperVideoSection";
import EducationSection from "@/seeker/containers/resume-editor/EducationSection";
import CareerSection from "@/seeker/containers/resume-editor/CareerSection";
import ActivitySection from "@/seeker/containers/resume-editor/ActivitySection";
import TrainingSection from "@/seeker/containers/resume-editor/TrainingSection";
import CertificateSection from "@/seeker/containers/resume-editor/CertificateSection";
import AwardSection from "@/seeker/containers/resume-editor/AwardSection";
import PortfolioSection from "@/seeker/containers/resume-editor/PortfolioSection";
import IntroductionSection from "@/seeker/containers/resume-editor/IntroductionSection";
import PreferenceSection from "@/seeker/containers/resume-editor/PreferenceSection";

function processSingleItem<T>(item: Optional<T>) {
  return item ?? {};
}

function processArrayItem<T>(item: Optional<Array<T>>) {
  return item?.map(item => item ?? {}) ?? [{}];
}

const EditorColumn = () => {
  const account = useStoreSelector(state => state.auth.account);
  const dispatch = useStoreDispatch();
  const doRequest = useRequest();

  useEffect(() => {
    (async () => {
      if (!account) {
        return;
      }

      const resumeTitle = getResumeTitle(account);

      const resumes = await doRequest(ResumeAPI.findMyResumes());
      const downloadedResume =
        typeof resumes === "string" ? undefined : resumes.resumes.find(resume => resume.title === resumeTitle);

      if (!downloadedResume || !downloadedResume.id) {
        return;
      }

      const wholeResume = (await doRequest(ResumeAPI.findWholeResume(downloadedResume.id))).resume;
      dLog(wholeResume);

      dispatch(
        updateWholeResume({
          resume: {
            id: wholeResume.id,
            title: wholeResume.title,
            content: wholeResume.content,
            is_public: wholeResume.is_public,
            // user_id: ...,
          },
          resumeInfo: processSingleItem(wholeResume.resume_info),
          educations: processArrayItem(wholeResume.educations),
          careers: processArrayItem(wholeResume.careers),
          certificates: processArrayItem(wholeResume.certificates),
          activities: processArrayItem(wholeResume.activities),
          awards: processArrayItem(wholeResume.awards),
          trainings: processArrayItem(wholeResume.trainings),
          introductions: processArrayItem(wholeResume.introductions),
          portfolio: processSingleItem(wholeResume.portfolio),
          myVideo: processSingleItem(wholeResume.my_video),
          helperVideo: processSingleItem(wholeResume.helper_video),
          preference: {
            id: wholeResume.preference?.id,
            resume_id: wholeResume.preference?.resume_id,
            employ_type: wholeResume.preference?.employ_type,
            salary: wholeResume.preference?.salary,
          },
          preferenceLocations: processArrayItem(wholeResume.preference?.preference_locations),
          preferenceJobs: processArrayItem(wholeResume.preference?.preference_jobs),
        })
      );
    })();
  }, [dispatch, account, doRequest]);

  return (
    <Page.Column fill>
      {
        // 서버에 대응되는 항목이 없는 것 같아 한줄소개는 일단 뺌.
        // <TitleSection />
      }
      <InfoSection />
      <MyVideoSection />
      <HelperVideoSection />
      <EducationSection />
      <CareerSection />
      <ActivitySection />
      <TrainingSection />
      <CertificateSection />
      <AwardSection />
      <PortfolioSection />
      <IntroductionSection />
      <PreferenceSection />
    </Page.Column>
  );
};

export default EditorColumn;
