import React from 'react';
import Image from 'next/image';

import TitledSection from '@/components/home/TitledSection';
import styles from '@/views/home/MyPageSection.module.scss';

import ExampleImage from '@/images/home-mypage-image.jpg';

const MyPageSection = () => (
  <TitledSection
    titleParts={['자기 PR도', '영상으로']}
    descriptionParts={['영상으로 이력서를 남겨 사회에 나를 소개해 보아요.']}
  >
    <div className={styles.content}>
      <video
        className={styles.video}
        src={'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4'}
        controls
      />
      <div className={styles.overlapArea}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>불편하게 쓰는 이력서는 이제 그만!</div>
          <div className={styles.cardDescription}>
            이제 이력서도 영상으로 찍는 시대입니다. 나를 동영상으로 자유롭게 표현해 보세요! 구직자들에게 마음껏 자기
            PR을 하여 보아요! 사회는 여러분들의 적극적인 구직활동을 환영합니다!
          </div>
        </div>
        <div className={styles.imageArea}>
          <Image src={ExampleImage} alt={'예시 이미지'} layout={'responsive'} />
        </div>
      </div>
    </div>
  </TitledSection>
);

export default MyPageSection;
