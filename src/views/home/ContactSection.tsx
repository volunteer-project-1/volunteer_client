import React from 'react';
import Image from 'next/image';

import styles from '@/views/home/ContactSection.module.scss';
import Background from '@/images/home-contact-background.jpg';

const ContactSection = () => (
  <div className={styles.bannerSection}>
    <Image src={Background} alt={'Contact'} layout={'responsive'} />
  </div>
);

export default ContactSection;
