import React, { useEffect } from "react";

import { Optional } from "@/types/Common";
import ResumeAPI from "@/api/ResumeAPI";
import { getResumeTitle } from "@/utils/StringUtils";
import { dLog } from "@/utils/DebugUtils";
import { useRequest } from "@/utils/APIUtils";
import { useStoreDispatch, useStoreSelector } from "@/store";
import { updateWholeResume } from "@/store/resume";
import Page from "@/components/page";
// import TitleSection from "@/containers/seeker/resume-editor/TitleSection";
import InfoSection from "@/containers/seeker/resume-editor/InfoSection";
import MyVideoSection from "@/containers/seeker/resume-editor/MyVideoSection";
import HelperVideoSection from "@/containers/seeker/resume-editor/HelperVideoSection";
import EducationSection from "@/containers/seeker/resume-editor/EducationSection";
import CareerSection from "@/containers/seeker/resume-editor/CareerSection";
import ActivitySection from "@/containers/seeker/resume-editor/ActivitySection";
import TrainingSection from "@/containers/seeker/resume-editor/TrainingSection";
import CertificateSection from "@/containers/seeker/resume-editor/CertificateSection";
import AwardSection from "@/containers/seeker/resume-editor/AwardSection";
import PortfolioSection from "@/containers/seeker/resume-editor/PortfolioSection";
import IntroductionSection from "@/containers/seeker/resume-editor/IntroductionSection";

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
          introductions: processArrayItem(wholeResume.trainings),
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
    </Page.Column>
  );
};

export default EditorColumn;
