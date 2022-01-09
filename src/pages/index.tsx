import React from 'react';
import Link from 'next/link';

const MainPage = () => (
    <div>
        <Link href={'/login'}>
            <a>To login</a>
        </Link>
    </div>
);

export default MainPage;
