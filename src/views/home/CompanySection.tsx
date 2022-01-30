import React from 'react';

import Section from '@/components/home/Section';
import CompanyCard from '@/components/home/CompanyCard';
import CompanyImage from '@/images/Company.jpg';

const CompanySection = () => (
    <Section
        titleParts={[
            '당신을',
            '기다립니다'
        ]}
        descriptionParts={[
            '당신의 능력을 펼쳐보세요! 당신을 기다리는 기업이 이만큼 존재한답니다.',
            '어서어서 지원해주세요!'
        ]}
    >
        <CompanyCard
            companyImage={CompanyImage}
            name={'에스디바이오센서'}
            description={'2022년 상반기 각 부문별 정기 경력/신입 공채'}
            dueDate={new Date('2022-03-01')}
        />
    </Section>
);

export default CompanySection;
