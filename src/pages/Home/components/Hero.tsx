import picture from '@/assets/home/firstImage.png'
import { useTranslation } from 'react-i18next'
import resume from '@/assets/home/CV - 2023.pdf'

export const Frontpage = () => {

    const [t] = useTranslation('global')
    return (

        <>
            <div className="lg:-mx-6 lg:flex lg:items-center">

                <div className="lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">{t("home.greeting")}<span className='text-primary'> {t("home.tech")}</span> {t("home.country")}</h1>

                    <p className="mt-3 text-sm text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>
                    <a href={resume} type='button' download='resume.pdf' className="py-2.5 px-5 my-4 text-sm font-bold text-white 
                     focus:outline-none border border-primary transition 
                     duration-500 ease-in-out transform 
                     hover:bg-primary100 hover:text-darkText 
                     hover:shadow-none hover:-translate-y-1 
                     hover:scale-110">{t("home.button")} </a>
                </div>
                <img className="object-scale-down w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={picture} alt="" />

            </div>


            <div className="py-10 w-3/4 mt-10 mx-auto border border-secondary">
                <blockquote>
                    <p className="text-2xl italic font-medium text-secondary text-center overflow-auto">"{t("home.quote")}"</p>
                </blockquote>
                <p className="pr-3 font-light text-center text-secondary">- Kent Beck</p>
            </div>
        </>


    )
}