import React from 'react';
import Image from 'next/image';

import styles from '@/components/home/SeekerCard.module.scss';

export interface SeekerCardProps {
    profileImage: StaticImageData;
    name: string;
    age: number;
    gender: '남' | '여';
    address: string;
    job: string;
    career: string;
    handicap: string;
}

const SeekerCard = ({ profileImage, name, age, gender, address, job, career, handicap }: SeekerCardProps) => {
    const onClickSuggest = () => {
        alert('당신은 합격!');
    };

    return (
        <div className={styles.seekerCard}>
            <div className={styles.profileArea}>
                <Image
                    className={styles.profileImage}
                    alt={name}
                    src={profileImage.src}
                    width={100}
                    height={100}
                    blurDataURL={profileImage.blurDataURL}
                />
                <button
                    className={styles.likeButton}
                    type={'button'}
                >
                    ♡
                </button>
            </div>
            <div className={styles.nameArea}>
                <span className={styles.name}>{name}</span>
                <span className={styles.age}>{age}세({gender})</span>
            </div>
            <div>
                {address} 거주
            </div>
            <div className={styles.jobArea}>
                {job}/ {career}
            </div>
            <div>
                {handicap}
            </div>
            <button
                className={styles.suggestButton}
                type={'button'}
                onClick={onClickSuggest}
            >
                제안하기
            </button>
        </div>
    );
};

export default SeekerCard;
