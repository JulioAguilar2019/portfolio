import { Divider } from "@/components";
import { About, Frontpage, ProjectCard } from "@/pages";
import { TechStack } from '../About/components/TechStack';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
    const [t] = useTranslation('global')

    return (
        <>
            <Frontpage />
            <Divider title={t("nav.projects")} button={true} line={true} />
            <div className="grid grid-cols-1 place-items-center gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <Divider title={t("nav.techs")} line={true} />
            <TechStack />
            <Divider title={t("nav.about")} line={true} />
            <About />
        </>
    )
}