import React, { ReactNode } from 'react';

import styles from '@/components/home/Section.module.scss';

interface Props {
    // ex. ['당신을', '기다립니다'].
    titleParts: [string, string];

    // ex. ['당신의 능력을 펼쳐보세요!', '어서어서 지원해주세요!'].
    descriptionParts: Array<string>;

    // 섹션 내용.
    children: ReactNode;
}

/**
 * 메인 페이지의 각 섹션을 나타냄.
 */
const Section = ({ titleParts, descriptionParts, children }: Props) => (
    <div className={styles.section}>
        <div className={styles.sectionTitle}>
            <span className={styles.sectionTitleEmphasize}>{titleParts[0]}</span>
            &nbsp;
            {titleParts[1]}
        </div>
        <div className={styles.sectionDescription}>
            {descriptionParts.map(part => <div key={part}>{part}</div>)}
        </div>
        {children}
    </div>
);

export default Section;
