import React from 'react';

import TitledSection from '@/components/home/TitledSection';
import CompanyCard, { CompanyCardProps } from '@/components/home/CompanyCard';
import styles from '@/views/home/CompanySection.module.scss';

import Company1 from '@/images/home-company1.jpg';
import Company2 from '@/images/home-company2.jpg';
import Company3 from '@/images/home-company3.jpg';
import Company4 from '@/images/home-company4.jpg';
import Company5 from '@/images/home-company5.jpg';
import Company6 from '@/images/home-company6.jpg';

// 임시로 만듬...
const exampleCards: Array<CompanyCardProps> = [
  {
    companyImage: Company1,
    name: '에스디바이오센서',
    description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
    dueDate: new Date('2022-03-01'),
  },
  {
    companyImage: Company2,
    name: '플랜트코퍼레이션',
    description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
    dueDate: new Date('2022-03-01'),
  },
  {
    companyImage: Company3,
    name: '네이버',
    description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
    dueDate: new Date('2022-03-01'),
  },
  {
    companyImage: Company4,
    name: '(주)오픈',
    description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
    dueDate: new Date('2022-03-01'),
  },
  {
    companyImage: Company5,
    name: '현대자동차',
    description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
    dueDate: new Date('2022-03-01'),
  },
  {
    companyImage: Company6,
    name: '한국토지주택공사',
    description: '2022년 상반기 각 부문별 정기 경력/신입 공채',
    dueDate: null,
  },
];

const columnCount = 3;
const columns: Array<Array<CompanyCardProps>> = [];

// ex. 3열로 배치한다면...
// Card 0 | Card 1 | Card 2
// Card 3 | Card 4 | Card 5
// Card 6 | Card 7 | Card 8
for (let i = 0; i < columnCount; i++) {
  columns.push(exampleCards.filter((card, index) => index % columnCount === i));
}

const CompanySection = () => {
  const onClickMore = () => {
    alert('더보기!');
  };

  return (
    <TitledSection
      titleParts={['당신을', '기다립니다']}
      descriptionParts={[
        '당신의 능력을 펼쳐보세요! 당신을 기다리는 기업이 이만큼 존재한답니다.',
        '어서어서 지원해주세요!',
      ]}
    >
      <div className={styles.content}>
        <div className={styles.grid}>
          {columns.map((column, index) => (
            <div className={styles.column} key={index}>
              {column.map(card => (
                <CompanyCard key={card.name} {...card} />
              ))}
            </div>
          ))}
        </div>
        <button type={'button'} className={styles.moreButton} onClick={onClickMore}>
          더보기
        </button>
      </div>
    </TitledSection>
  );
};

export default CompanySection;
