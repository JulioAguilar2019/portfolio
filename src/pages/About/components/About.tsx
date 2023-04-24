import image from '@/assets/about/image.png';
import resume from '@/assets/home/CV - 2023.pdf'
import { PublicRoutes } from '@/models';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
interface Props {
    homePage?: boolean;
}

const buttonClass = "py-2.5 px-5 my-4 text-sm font-bold text-white focus:outline-none border border-primary transition duration-500 ease-in-out transform hover:bg-primary100 hover:text-darkText hover:shadow-none hover:-translate-y-1 hover:scale-110"


export const About = ({ homePage = true }: Props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="lg:-mx-6 lg:flex lg:items-start">

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-4xl">Who am I?</h1>

                    <p className="mb-3 font-light text-justify leading-8 text-secondary">
                        Soy un desarrollador web frontend en mi último año de ingeniería en desarrollo de software. Utilizo tecnologías como <span className="text-primary">TypeScript, React JS, Redux, Tailwind y NodeJS</span> para crear aplicaciones web intuitivas y atractivas. También tengo un <span className="text-primary">nivel B2 en inglés</span>, lo que me permite comunicarme eficazmente con colegas y clientes en un ambiente internacional.
                    </p>
                    <p className="mb-3 font-light text-justify leading-8 text-secondary">
                        Además de mi experiencia técnica, también tengo habilidades en <span className="text-primary">resolución de problemas y pensamiento lógico</span> que me permiten encontrar soluciones eficaces a los desafíos que se presentan en el desarrollo de software. Me gusta trabajar en equipo y colaborar con otros desarrolladores para lograr resultados impresionantes. Estoy constantemente buscando aprender nuevas habilidades y tecnologías para mejorar mis habilidades y ofrecer un mejor servicio a mis clientes. Estoy ansioso de poner mis habilidades a prueba en un entorno de trabajo desafiante y enriquecedor.
                    </p>
                    {
                        homePage
                            ?
                            <NavLink to={PublicRoutes.ABOUT} type='button' className={buttonClass}>Read more</NavLink>
                            :
                            <a href={resume} type='button' download='resume.pdf' className={buttonClass}>Download resume</a>
                    }
                </div>
                <img className="object-scale-down lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[45rem]" src={image} alt="julio-aguilar" />

            </div>

        </>


    )
}