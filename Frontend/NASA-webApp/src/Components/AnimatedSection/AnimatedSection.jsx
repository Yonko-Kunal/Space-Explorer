import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AnimatedSection.css';

const AnimatedSection = ({ children, className, id }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div id={id} ref={ref} className={`${className} animated-section ${inView ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

export default AnimatedSection; 