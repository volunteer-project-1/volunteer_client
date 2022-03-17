import React from "react";

import TitledSection from "@/components/home/TitledSection";
import SeekerCardList from "@/components/common/SeekerCardList";
import styles from "@/views/home/SeekerSection.module.scss";

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
    <div className={styles.content}>
      <SeekerCardList />
    </div>
  </TitledSection>
);

export default SeekerSection;
