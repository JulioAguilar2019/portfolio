import React from 'react'
import githubIcon from '@/assets/projects/githubIcon.svg'
import reactIcon from '@/assets/projects/reactIcon.svg'
import tailwindIcon from '@/assets/projects/tailwindIcon.svg'
import typescriptIcon from '@/assets/projects/typescriptIcon.svg'
import javascriptIcon from '@/assets/projects/javascriptIcon.svg'
import postgresqlIcon from '@/assets/projects/postgresqlIcon.svg'

export const TechTest = () => {
    return (
        <>
            <div className="flex flex-col text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <img alt="react" src={reactIcon} className="mx-auto object-cover h-40 w-40 " />
                <p className="text-xl font-light text-secondary">
                    React
                </p>
            </div>
            <div className="flex flex-col text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <img alt="react" src={githubIcon} className="mx-auto object-cover h-40 w-40 " />
                <p className="text-xl font-light text-secondary">
                    GitHub
                </p>
            </div>
            <div className="flex flex-col text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <img alt="react" src={tailwindIcon} className="mx-auto object-cover h-40 w-40 " />
                <p className="text-xl font-light text-secondary">
                    TailwindCSS
                </p>
            </div>
            <div className="flex flex-col text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <img alt="react" src={typescriptIcon} className="mx-auto object-cover h-40 w-40 " />
                <p className="text-xl font-light text-secondary">
                    TypeScript
                </p>
            </div>
            <div className="flex flex-col text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <img alt="react" src={postgresqlIcon} className="mx-auto object-cover h-40 w-40 " />
                <p className="text-xl font-light text-secondary">
                    PostgreSQL
                </p>
            </div>
        </>
    )
}
