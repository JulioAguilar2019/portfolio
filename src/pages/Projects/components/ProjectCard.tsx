import githubIcon from '@/assets/projects/githubIcon.svg'
import reactImage from '@/assets/projects/react.png'
import reactIcon from '@/assets/projects/reactIcon.svg'
import tailwindIcon from '@/assets/projects/tailwindIcon.svg'
import typescriptIcon from '@/assets/projects/typescriptIcon.svg'
import postgresqlIcon from '@/assets/projects/postgresqlIcon.svg'

export const ProjectCard = () => {

    return (

        <div
            className="w-full max-w-sm max-h-fit  bg-background100 border border-secondary overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"

        >
            <img className="object-cover object-center w-full h-56 border-b border-secondary" src={reactImage} alt="avatar" />

            {/* <div className="flex items-center px-6 py-3 border border-secondary bg-primary">
                <h1 className="mx-3 text-lg font-semibold text-background">View live</h1>
            </div> */}

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-white ">Project name</h1>

                <p className="py-2 text-secondary max-h-20 overflow-clip">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>

                <div className="flex items-center justify-between mt-4 text-secondary">
                    <div>
                        <h1 className="text-sm font-semibold text-white">Stack</h1>
                        <div className="flex items-center flex-wrap justify-start gap-4 mt-1">
                            <img className="w-6 h-6" src={reactIcon} alt="react" />
                            <img className="w-6 h-6" src={typescriptIcon} alt="typescript" />
                            <img className="w-6 h-6" src={tailwindIcon} alt="tailwind" />
                            <img className="w-6 h-6" src={postgresqlIcon} alt="PostgreSql" />
                        </div>
                    </div>
                    <div className="ml-2">
                        <button className='py-2 px-5 font-bold text-white overflow-hidden focus:outline-none border border-primary transition-colors duration-200 transform hover:bg-primary100 hover:text-darkText'>
                            <span className="inline-flex items-center justify-center gap-4">
                                <p className='whitespace-nowrap'>View code</p>
                                <img src={githubIcon} className="h-6 sm:h-6" alt="icon" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}