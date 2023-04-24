import React from 'react';
import { motion } from 'framer-motion';

interface ImageWithHoverProps {
    src: string;
    hoverSrc: string;
    alt: string;
    title: string;
}

export const ImageWithHover: React.FC<ImageWithHoverProps> = ({ src, hoverSrc, alt, title }) => {
    return (
        <div className='flex flex-col text-center'>
            <motion.img
                src={src}
                alt={alt}
                className='mx-auto object-cover h-40 w-40'
                whileHover={{ scale: 1.1, y: -10 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
                    e.currentTarget.src = hoverSrc;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
                    e.currentTarget.src = src;
                }}
            />
            <p className="text-xl font-light text-secondary">
                {title}
            </p>
        </div>
    );
};
