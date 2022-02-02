import React from 'react';

import SeekerCard, { SeekerCardProps } from '@/components/home/SeekerCard';
import Section from '@/components/home/Section';
import styles from '@/views/home/SeekerSection.module.scss';
import Seeker1 from '@/images/home-seeker2.png';

// 임시로 만듬...
const exampleCards: Array<SeekerCardProps> = [
    {
        profileImage: Seeker1,
        name: '박철수',
        age: 35,
        gender: '남',
        address: '서울시',
        job: '서비스 기획자',
        career: '경력 5년차',
        handicap: '청각장애 1급'
    },
    {
        profileImage: Seeker1,
        name: '김철수',
        age: 35,
        gender: '여',
        address: '서울시',
        job: '서비스 기획자',
        career: '경력 5년차',
        handicap: '청각장애 1급'
    },
    {
        profileImage: Seeker1,
        name: '박영희',
        age: 35,
        gender: '여',
        address: '서울시',
        job: '서비스 기획자',
        career: '경력 5년차',
        handicap: '청각장애 1급'
    },
    {
        profileImage: Seeker1,
        name: '김영희',
        age: 35,
        gender: '여',
        address: '서울시',
        job: '서비스 기획자',
        career: '경력 5년차',
        handicap: '청각장애 1급'
    }
];

const SeekerSection = () => (
    <Section
        titleParts={[
            'PICK ME!!!',
            '꼭맞는 인재를 PICK!!!'
        ]}
        descriptionParts={[
            '우리기업에 꼭 필요한 인재들이 여기 있습니다.',
            '우수하고 훌륭한 인재들에게 적극적으로 제안해보세요!'
        ]}
    >
        <div className={styles.seekerCards}>
            {exampleCards.map(card => <SeekerCard key={card.name} {...card} />)}
        </div>
    </Section>
);

export default SeekerSection;
