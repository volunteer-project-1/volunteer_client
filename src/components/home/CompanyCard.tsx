import React from 'react';
import Image from 'next/image';

import { daysBetweenDates } from '@/utils/DateUtils';
import LikeButton from '@/components/home/LikeButton';
import styles from '@/components/home/CompanyCard.module.scss';

interface CompanyCardProps {
    companyImage: StaticImageData;
    name: string;
    description: string;
    // 마감 날짜.
    dueDate: Date;
}

const CompanyCard = ({ companyImage, name, description, dueDate }: CompanyCardProps) => {
    const dDays = daysBetweenDates(new Date(), dueDate);

    const onClickLike = () => {
        alert('좋아요!');
    };

    return (
        <div className={styles.companyCard}>
            <Image
                className={styles.companyImage}
                src={companyImage.src}
                alt={name}
                width={companyImage.width}
                height={companyImage.height}
                blurDataURL={companyImage.blurDataURL}
            />
            <div className={styles.contentArea}>
                <div className={styles.likeButtonArea}>
                    <LikeButton onClick={onClickLike} />
                </div>
                <div className={styles.name}>
                    {name}
                </div>
                <div>
                    {description}
                </div>
                <div className={styles.dDays}>
                    D-{dDays}
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
