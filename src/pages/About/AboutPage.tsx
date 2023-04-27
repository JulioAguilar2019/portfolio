import { Divider } from "@/components"
import { About } from "./components"
import { TechStack } from "./components/TechStack"
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {

    const [t] = useTranslation('global')
    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"> <span className="text-primary">/</span>{t("nav.about")} </h1>
            <About homePage={false} />
            <Divider title={t("nav.techs")} line={true} />
            <TechStack />
        </>
    )
}