/**
 * Reveal component - Wrapper for scroll-triggered entry animations using Framer Motion
 * Handles directional fades (up, down, left, right) with customizable delay and duration.
 */

'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, UseInViewOptions } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    duration?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    once?: boolean;
}

export function Reveal({
    children,
    width = 'fit-content',
    delay = 0.1,
    duration = 0.5,
    className = "",
    direction = 'up',
    distance = 30,
    once = true
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    const getHiddenVariant = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: distance };
            case 'down': return { opacity: 0, y: -distance };
            case 'left': return { opacity: 0, x: distance };
            case 'right': return { opacity: 0, x: -distance };
            case 'none': return { opacity: 0 };
            default: return { opacity: 0, y: distance };
        }
    };

    return (
        <div ref={ref} className={`${className}`} style={{ width, position: 'relative', overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: getHiddenVariant(),
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
