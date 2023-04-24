import { ProjectCard } from "./components"
import { GridProjectCard } from "./components/GridProjectCard"
import { Divider } from '@/components';

export const ProjectsPage = () => {
    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"> <span className="text-primary">/</span>projects</h1>
            <h1 className="text-lg font-medium leading-none tracking-tight text-white md:text-xl lg:text-2xl">List of my projects</h1>

            <Divider title={"frontend-projects"} />
            <GridProjectCard children={
                <ProjectCard />
            } />
            <Divider line={true} title={"backend-projects"} />
            <GridProjectCard children={
                <ProjectCard />
            } />
            <Divider line={true} title={"mobile-projects"} />
            <GridProjectCard children={
                <ProjectCard />
            } />
        </>
    )
}