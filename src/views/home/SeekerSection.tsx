import React from 'react';

import SeekerCard, { SeekerCardProps } from '@/components/home/SeekerCard';
import ProfileImage from '@/images/Profile.jpg';
import styles from '@/views/home/SeekerSection.module.scss';

// 임시로 만듬...
const exampleCards: Array<SeekerCardProps> = [
    {
        profileImage: ProfileImage,
        name: '김철수',
        age: 35,
        gender: '남',
        address: '서울시',
        job: '서비스 기획자',
        career: '경력 5년차',
        handicap: '청각장애 1급'
    },
    {
        profileImage: ProfileImage,
        name: '김철수',
        age: 35,
        gender: '여',
        address: '서울시',
        job: '서비스 기획자',
        career: '경력 5년차',
        handicap: '청각장애 1급'
    },
    {
        profileImage: ProfileImage,
        name: '박영희',
        age: 35,
        gender: '여',
        address: '서울시',
        job: '서비스 기획자',
        career: '경력 5년차',
        handicap: '청각장애 1급'
    },
    {
        profileImage: ProfileImage,
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
    <div className={styles.seekerSection}>
        <div className={styles.sectionTitle}>
            <span className={styles.sectionTitleEmphasize}>PICK ME!!!</span>
            &nbsp;꼭맞는 인재를 PICK!!!
        </div>
        <div className={styles.sectionDescription}>
            우리기업에 꼭 필요한 인재들이 여기 있습니다.
            <br />
            우수하고 훌륭한 인재들에게 적극적으로 제안해보세요!
        </div>
        <div className={styles.seekerCards}>
            {exampleCards.map(card => <SeekerCard key={card.name} {...card} />)}
        </div>
    </div>
);

export default SeekerSection;
