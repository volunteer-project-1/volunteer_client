import React from "react";

import TitledSection from "@/components/home/TitledSection";
import List from "@/components/list";
import "@/components/home/SeekerSection.scoped.scss";

const SeekerSection = () => (
  <TitledSection
    backgroundStyle={"light"}
    titleStyle={"center"}
    titleParts={["PICK ME!!!", "꼭맞는 인재를 PICK!!!"]}
    descriptionParts={[
      "우리기업에 꼭 필요한 인재들이 여기 있습니다.",
      "우수하고 훌륭한 인재들에게 적극적으로 제안해보세요!",
    ]}
  >
    <div className="content">
      <List.Seeker />
    </div>
  </TitledSection>
);

export default SeekerSection;
