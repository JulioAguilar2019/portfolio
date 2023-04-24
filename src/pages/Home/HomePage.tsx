import { Divider } from "@/components"
import { About, ProjectCard } from "@/pages"
import { Frontpage } from "@/pages"
import { TechStack } from '../About/components/TechStack';
import reactIcon from '@/assets/projects/reactIcon.svg'
import tailwindIcon from '@/assets/projects/tailwindIcon.svg'
import typescriptIcon from '@/assets/projects/typescriptIcon.svg'

const images = [reactIcon, tailwindIcon, typescriptIcon]
export const HomePage = () => {
    return (
        <>
            <Frontpage />
            <Divider title="Projects" button={true} line={true} />
            <div className="grid grid-cols-1 place-items-center gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <Divider title="Tech-Stack" line={true} />
            <TechStack />
            <Divider title="About" line={true} />
            <About />
        </>
    )
}