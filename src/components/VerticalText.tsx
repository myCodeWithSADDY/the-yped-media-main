"use client";

import { useEffect, useState } from 'react';
import styles from './VerticalText.module.css';

type VerticalBarProps = {
    title: string;
};

const VerticalText: React.FC<VerticalBarProps> = ({ title }) => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / maxScroll;
            setScrollPercent(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.fixedContainer}>
            <div
                className={styles.scrollingText}
                style={{ transform: `translateY(${100 - scrollPercent * 100}%)` }}
            >
                <p>{title}</p>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default VerticalText;
