import image from '@/assets/about/image.png';
import resume from '@/assets/home/CV - 2023.pdf';
import { PublicRoutes } from '@/models';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

interface Props {
    homePage?: boolean;
}

const buttonClass = "py-2.5 px-5 my-4 text-sm font-bold text-white focus:outline-none border border-primary transition duration-500 ease-in-out transform hover:bg-primary100 hover:text-darkText hover:shadow-none hover:-translate-y-1 hover:scale-110"


export const About = ({ homePage = true }: Props) => {
    const [t] = useTranslation('global')

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="lg:-mx-6 lg:flex lg:items-start">

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-4xl">{t("about.title")}</h1>

                    <p className="mb-3 font-light text-justify leading-8 text-secondary">
                        {t("about.about-me")}<span className="text-primary">{t("about.techs")}</span>{t("about.paragraph1")}<span className="text-primary">{t("about.english")}</span>{t("about.paragraph2")}
                    </p>
                    <p className="mb-3 font-light text-justify leading-8 text-secondary">
                        {t("about.experience")}<span className="text-primary"> {t("about.abilities")}</span>{t("about.paragraph3")}
                    </p>
                    {
                        homePage
                            ?
                            <NavLink to={PublicRoutes.ABOUT} type='button' className={buttonClass}>{t("about.buttonMore")}</NavLink>
                            :
                            <a href={resume} type='button' download='resume.pdf' className={buttonClass}>{t("about.buttonCV")}</a>
                    }
                </div>
                <img className="object-scale-down lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[45rem]" src={image} alt="julio-aguilar" />

            </div>

        </>


    )
}