
import { useState } from 'react'
import { TechIcon } from './TechIcon'
import { TechTest } from './TechTest'

export const TechStack = () => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <>
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <TechTest />
            </div >
        </>
    )
}

