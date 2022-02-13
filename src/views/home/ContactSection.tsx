import React from 'react';
import Image from 'next/image';

import styles from '@/views/home/ContactSection.module.scss';
import Background from '@/images/home-contact-background.jpg';

const ContactSection = () => (
  <div className={styles.contactSection}>
    <Image src={Background} alt={'Contact'} layout={'responsive'} />
    <div className={styles.content}>
      <div className={styles.aboutRow}>
        <div>
          <div className={styles.aboutTitle}>Contact us!</div>
          <div className={styles.aboutDescription}>
            언제든 궁금한 점이 있으면 연락주세요.
            <br />
            언제나 답변해드립니다.
          </div>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formTitle}>사용자 정보</div>
        <input className={styles.formTextField} type={'text'} placeholder={'이름'} />
        <input className={styles.formTextField} type={'text'} placeholder={'연락처'} />
        <input className={styles.formTextField} type={'text'} placeholder={'메일주소'} />
        <textarea className={styles.formTextArea} rows={5} placeholder={'문의사항을 작성해주세요.'} />
        <div>
          <input className={styles.formCheckBox} type={'checkbox'} />
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
