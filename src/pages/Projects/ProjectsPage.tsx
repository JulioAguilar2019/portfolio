import { ProjectCard } from "./components"
import { GridProjectCard } from "./components/GridProjectCard"
import { Divider } from '@/components';
import { useTranslation } from 'react-i18next';

export const ProjectsPage = () => {
    const [t] = useTranslation('global')

    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"> <span className="text-primary">/</span>{t("nav.projects")}</h1>
            <h1 className="text-lg font-medium leading-none tracking-tight text-white md:text-xl lg:text-2xl">{t("projects.title")}</h1>

            <Divider title={t("projects.front")} />
            <GridProjectCard children={
                <ProjectCard />
            } />
            <Divider line={true} title={t("projects.back")} />
            <GridProjectCard children={
                <ProjectCard />
            } />
            <Divider line={true} title={t("projects.mobile")} />
            <GridProjectCard children={
                <ProjectCard />
            } />
        </>
    )
}