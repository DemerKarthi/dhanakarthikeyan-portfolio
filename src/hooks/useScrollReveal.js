import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(r => observer.observe(r));

        return () => {
            reveals.forEach(r => observer.unobserve(r));
        };
    }, []);
};

export default useScrollReveal;
