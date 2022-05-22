import React, { useEffect } from "react";

import ResumeAPI from "@/api/ResumeAPI";
import { useStoreDispatch, useStoreSelector } from "@/store";
import { updateEducation, updateResume, updateResumeInfo } from "@/store/resume";
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

const EditorColumn = () => {
  const dispatch = useStoreDispatch();

  useEffect(() => {
    (async () => {
      const wholeResume = (await ResumeAPI.findResumeByID(88)).resume;

      console.log(wholeResume);

      dispatch(
        updateResume({
          id: wholeResume.id,
          title: wholeResume.title,
          content: wholeResume.content,
          is_public: wholeResume.is_public,
          // user_id: ...,
        })
      );

      wholeResume.resume_info && dispatch(updateResumeInfo(wholeResume.resume_info));
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
