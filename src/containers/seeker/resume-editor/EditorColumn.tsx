import React, { useEffect } from "react";

import { Optional } from "@/types/Common";
import ResumeAPI from "@/api/ResumeAPI";
import { useStoreDispatch, useStoreSelector } from "@/store";
import { updateWholeResume } from "@/store/resume";
import Page from "@/components/page";
// import TitleSection from "@/containers/seeker/resume-editor/TitleSection";
import InfoSection from "@/containers/seeker/resume-editor/InfoSection";
import EducationSection from "@/containers/seeker/resume-editor/EducationSection";
import CareerSection from "@/containers/seeker/resume-editor/CareerSection";
import ActivitySection from "@/containers/seeker/resume-editor/ActivitySection";
import TrainingSection from "@/containers/seeker/resume-editor/TrainingSection";
import CertificateSection from "@/containers/seeker/resume-editor/CertificateSection";
import AwardSection from "@/containers/seeker/resume-editor/AwardSection";
import PortfolioSection from "@/containers/seeker/resume-editor/PortfolioSection";
import IntroductionSection from "@/containers/seeker/resume-editor/IntroductionSection";

function processOptionalArray<T>(array: Optional<Array<T>>) {
  return array?.map(item => item ?? {}) ?? [{}];
}

const EditorColumn = () => {
  const dispatch = useStoreDispatch();

  useEffect(() => {
    (async () => {
      const wholeResume = (await ResumeAPI.findResumeByID(88)).resume;

      console.log(wholeResume);

      dispatch(
        updateWholeResume({
          resume: {
            id: wholeResume.id,
            title: wholeResume.title,
            content: wholeResume.content,
            is_public: wholeResume.is_public,
            // user_id: ...,
          },
          resumeInfo: wholeResume.resume_info,
          educations: processOptionalArray(wholeResume.educations),
          careers: processOptionalArray(wholeResume.careers),
          certificates: processOptionalArray(wholeResume.certificates),
          activities: processOptionalArray(wholeResume.activities),
          awards: processOptionalArray(wholeResume.awards),
          trainings: processOptionalArray(wholeResume.trainings),
          introductions: processOptionalArray(wholeResume.trainings),
          // portfolio: wholeResume.portfolio,
          myVideo: wholeResume.my_video,
          helperVideo: wholeResume.helper_video,
          preference: {
            id: wholeResume.preference?.id,
            resume_id: wholeResume.preference?.resume_id,
            employ_type: wholeResume.preference?.employ_type,
            salary: wholeResume.preference?.salary,
          },
          preferenceLocations: processOptionalArray(wholeResume.preference?.preference_locations),
          preferenceJobs: processOptionalArray(wholeResume.preference?.preference_jobs),
        })
      );
    })();
  }, [dispatch]);

  return (
    <Page.Column fill>
      {
        // 서버에 대응되는 항목이 없는 것 같아 한줄소개는 일단 뺌.
        // <TitleSection />
      }
      <InfoSection />
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
