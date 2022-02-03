import React from 'react';
import Image from 'next/image';

import styles from '@/views/home/ContactSection.module.scss';
import Background from '@/images/home-contact-background.jpg';

const ContactSection = () => (
    <div className={styles.bannerSection}>
        <Image
            src={Background.src}
            width={Background.width}
            height={Background.height}
            blurDataURL={Background.blurDataURL}
            alt={'Contact'}
            layout={'responsive'}
        />
    </div>
);

export default ContactSection;
