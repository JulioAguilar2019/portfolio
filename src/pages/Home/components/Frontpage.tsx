import picture from '@/assets/home/firstImage.png'
import { useTranslation } from 'react-i18next'

export const Frontpage = () => {

    const [t] = useTranslation('global')
    return (

        <>
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">{t("home.greeting")}<span className='text-primary'> {t("home.tech")}</span> {t("home.country")}</h1>

                    <p className="mt-3 text-sm text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>
                    <button type="button" className="py-2.5 px-5 my-4 text-sm font-medium text-white focus:outline-none border border-primary hover:bg-primary100">{t("home.button")}</button>

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