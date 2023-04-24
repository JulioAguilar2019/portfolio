import { Divider } from "@/components"
import { About } from "./components"

export const AboutPage = () => {
    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"> <span className="text-primary">/</span>about-me</h1>
            <About />
            <Divider title="tech-stack" />
        </>
    )
}