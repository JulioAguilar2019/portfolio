import { Divider } from "@/components"
import { ProjectCard } from "../Projects"
import { Frontpage } from "./components"

export const HomePage = () => {
    return (
        <>
            <Frontpage />
            <Divider title="Projects" />
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <Divider title="Skills" />
        </>
    )
}