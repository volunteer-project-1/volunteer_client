import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "@/components/home/TitledSection.module.scss";

interface TitledSectionProps {
  backgroundStyle: "light" | "dark";
  titleStyle: "center" | "left";

  // ex. ['당신을', '기다립니다'].
  titleParts: [string, string];

  // ex. ['당신의 능력을 펼쳐보세요!', '어서어서 지원해주세요!'].
  descriptionParts: Array<string>;

  // 섹션 내용.
  children: ReactNode;
}

/**
 * 메인 페이지에서 제목이 붙어있는 섹션들을 자동으로 스타일링 해주는 component.
 */
const TitledSection = ({ backgroundStyle, titleStyle, titleParts, descriptionParts, children }: TitledSectionProps) => (
  <div
    className={classNames(styles.section, {
      [styles.isDark]: backgroundStyle === "dark",
    })}
  >
    <div
      className={classNames(styles.sectionTitleArea, {
        [styles.isCenter]: titleStyle === "center",
      })}
    >
      <div className={styles.sectionTitle}>
        <span className={styles.sectionTitleEmphasize}>{titleParts[0]}</span>
        &nbsp;
        {titleParts[1]}
      </div>
      <div className={styles.sectionDescription}>
        {descriptionParts.map(part => (
          <div key={part}>{part}</div>
        ))}
      </div>
    </div>
    {children}
  </div>
);

export default TitledSection;
