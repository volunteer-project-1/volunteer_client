import React from "react";

import Section from '@/components/home/Section';
import styles from "./SampleResponse.module.scss";

const MyPageSection = () => (
    <Section
        titleParts={[
            '자기 PR도',
            '영상으로'
        ]}
        descriptionParts={[
            '영상으로 이력서를 남겨 사회에 나를 소개해 보아요.'
        ]}
    >
        <div className={styles.body}>(영상)</div>
    </Section>
);

export default MyPageSection;
