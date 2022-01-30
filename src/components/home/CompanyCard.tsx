import React from 'react';
import Image from 'next/image';

import { daysBetweenDates } from '@/utils/DateUtils';
import LikeButton from '@/components/home/LikeButton';
import styles from '@/components/home/CompanyCard.module.scss';

export interface CompanyCardProps {
    companyImage: StaticImageData;
    name: string;
    description: string;
    // 마감 날짜. (null이면 상시 채용)
    dueDate: Date | null;
}

const CompanyCard = ({ companyImage, name, description, dueDate }: CompanyCardProps) => {
    const dDays = dueDate ? `D-${daysBetweenDates(new Date(), dueDate)}` : '상시채용';

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
                    {dDays}
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
