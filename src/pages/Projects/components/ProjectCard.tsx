import reactImage from '@/assets/projects/react.png'
import reactIcon from '@/assets/projects/reactIcon.svg'
import tailwindIcon from '@/assets/projects/tailwindIcon.svg'
import typescriptIcon from '@/assets/projects/typescriptIcon.svg'

export const ProjectCard = () => {
    return (
        <div className="w-full max-w-sm border border-secondary overflow-hidden shadow-lg">
            <img className="object-cover object-center w-full h-56" src={reactImage} alt="avatar" />

            <div className="flex items-center px-6 py-3 border border-secondary bg-primary">
                <h1 className="mx-3 text-lg font-semibold text-background">View live</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-white ">Project name</h1>

                <p className="py-2 text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, reiciendis.</p>

                <div className="flex items-center justify-between mt-4 text-secondary">
                    <div>
                        <h1 className="text-sm font-semibold text-white">Stack</h1>
                        <div className="flex items-center mt-2 space-x-2">
                            <img className="w-6 h-6" src={reactIcon} alt="react" />
                            <img className="w-6 h-6" src={tailwindIcon} alt="tailwind" />
                            <img className="w-6 h-6" src={typescriptIcon} alt="typescript" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}