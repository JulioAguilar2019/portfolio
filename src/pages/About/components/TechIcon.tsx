import React, { useState } from 'react'

interface Props {
    img: string;
    altText: string;
    techName: string;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}

export const TechIcon = ({ img, altText, techName, left, right, top, bottom }: Props) => {

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };
    return (
        <div
            className={`flex flex-col w-[4rem] h-[4rem] items-center p-3 border border-secondary rounded-lg transition-all duration-300 ease-in-out hover:h-[6rem] hover:w-[7rem]`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'absolute',
                left: left ? `${left}%` : undefined,
                top: top ? `${top}%` : undefined,
                right: right ? `${right}%` : undefined,
                bottom: bottom ? `${bottom}%` : undefined,
            }}
        >
            <img className="w-10 h-10" src={img} alt={altText} />
            <span
                className={`text-center text-secondary mt-1 transition-opacity duration-300 ease-in-out ${hover ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                {techName}
            </span>
        </div>
    )
}
