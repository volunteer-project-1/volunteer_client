import React from 'react';

import Section from '@/components/home/Section';
import CompanyCard, { CompanyCardProps } from '@/components/home/CompanyCard';
import styles from '@/views/home/CompanySection.module.scss';
import CompanyImage from '@/images/Company.jpg';

// 임시로 만듬...
const exampleCards: Array<CompanyCardProps> = [
    {
        companyImage: CompanyImage,
        name: '에스디바이오센서',
        description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
        dueDate: new Date('2022-03-01')
    },
    {
        companyImage: CompanyImage,
        name: '플랜트코퍼레이션',
        description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
        dueDate: new Date('2022-03-01')
    },
    {
        companyImage: CompanyImage,
        name: '네이버',
        description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
        dueDate: new Date('2022-03-01')
    },
    {
        companyImage: CompanyImage,
        name: '(주)오픈',
        description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
        dueDate: new Date('2022-03-01')
    },
    {
        companyImage: CompanyImage,
        name: '현대자동차',
        description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
        dueDate: new Date('2022-03-01')
    },
    {
        companyImage: CompanyImage,
        name: '한국토지주택공사',
        description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
        dueDate: new Date('2022-03-01')
    }
];

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
        <div className={styles.companyCards}>
            {exampleCards.map(card => <CompanyCard key={card.name} {...card} />)}
        </div>
    </Section>
);

export default CompanySection;
