import React from 'react';

import styles from '@/components/home/LikeButton.module.scss';

interface LikeButtonProps {
    // 클릭 시에 실행할 함수.
    onClick: () => void;
}

/**
 * 메인 페이지에서 사용하는 좋아요 (하트) 버튼.
 */
const LikeButton = ({ onClick }: LikeButtonProps) => (
    <button
        className={styles.likeButton}
        type={'button'}
        onClick={onClick}
    >
        ♡
    </button>
);

export default LikeButton;
