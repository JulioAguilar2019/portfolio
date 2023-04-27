import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ImageWithHoverProps {
    src: string;
    hoverSrc: string;
    alt: string;
    title: string;
}

const isMobileDevice = () => {
    return window.innerWidth <= 768;
};

export const ImageWithHover: React.FC<ImageWithHoverProps> = ({
    src,
    hoverSrc,
    alt,
    title,
}) => {
    const [inView, setInView] = useState(false);
    const [isMobile, setIsMobile] = useState(isMobileDevice());
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(isMobileDevice());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile && ref.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setInView(true);
                            if (ref.current) {
                                ref.current.src = hoverSrc;
                            }
                        } else {
                            setInView(false);
                            if (ref.current) {
                                ref.current.src = src;
                            }
                        }
                    });
                },
                {
                    threshold: 0.8,
                }
            );

            observer.observe(ref.current);

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }
    }, [isMobile]);

    const animationProps = isMobile
        ? {
            animate: inView ? { scale: 1.1, y: -10 } : { scale: 1, y: 0 },
        }
        : {
            whileHover: { scale: 1.1, y: -10 },
        };

    return (
        <div className='flex flex-col text-center'>
            <motion.img
                ref={ref}
                src={src}
                alt={alt}
                className='mx-auto object-cover h-40 w-40'
                {...animationProps}
                transition={{ duration: 0.5 }}
                onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
                    if (!isMobile) {
                        e.currentTarget.src = hoverSrc;
                    }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
                    if (!isMobile) {
                        e.currentTarget.src = src;
                    }
                }}
            />
            <p className="text-xl font-light text-secondary">{title}</p>
        </div>
    );
};
