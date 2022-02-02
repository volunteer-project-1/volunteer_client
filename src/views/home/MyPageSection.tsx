import React from 'react';
import Image from 'next/image';

import TitledSection from '@/components/home/TitledSection';
import styles from '@/views/home/MyPageSection.module.scss';

import ExampleImage from '@/images/home-mypage-image.png';

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
        <div className={styles.content}>
            <video
                className={styles.exampleVideo}
                src={'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4'}
                controls
            />
            <div className={styles.exampleImageArea}>
                <Image
                    src={ExampleImage.src}
                    alt={'예시 이미지'}
                    width={ExampleImage.width}
                    height={ExampleImage.height}
                    blurDataURL={ExampleImage.blurDataURL}
                />
            </div>
        </div>
    </TitledSection>
);

export default MyPageSection;
