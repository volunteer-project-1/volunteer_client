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

const SeekerCard: React.FC<SeekerCardProps> = ({ profileImage, name, age, gender, address, job, career, handicap }) => {
    const onClickSuggest = () => {
        alert('당신은 합격!');
    };

    return (
        <div className={styles.seekerCard}>
            <Image
                className={styles.profileImage}
                alt={name}
                src={profileImage.src}
                width={80}
                height={80}
                blurDataURL={profileImage.blurDataURL}
            />
            <div className={styles.nameArea}>
                <span className={styles.name}>{name}</span>
                <span>{age}세({gender})</span>
            </div>
            <div>
                {address} 거주
            </div>
            <div>
                {job}/ {career}
            </div>
            <div>
                {handicap}
            </div>
            <button
                type={'button'}
                onClick={onClickSuggest}
            >
                제안하기
            </button>
        </div>
    );
};

export default SeekerCard;
