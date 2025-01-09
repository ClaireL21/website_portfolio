'use client';
import { useState, useEffect } from 'react';
import {
    AiOutlineArrowUp,
} from "react-icons/ai"
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 p-4 rounded-full bg-black text-white shadow-lg hover:bg-hover_yellow transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Back to Top"
        >
            <AiOutlineArrowUp/>
        </button>
    );
};

export default BackToTopButton;