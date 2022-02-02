import React from "react";

import TitledSection from '@/components/home/TitledSection';

const MyPageSection = () => (
    <TitledSection
        titleParts={[
            '자기 PR도',
            '영상으로'
        ]}
        descriptionParts={[
            '영상으로 이력서를 남겨 사회에 나를 소개해 보아요.'
        ]}
    >
        (영상)
    </TitledSection>
);

export default MyPageSection;
