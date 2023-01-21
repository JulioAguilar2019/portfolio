import picture from '@/assets/home/firstImage.png'

export const Frontpage = () => {
    return (

        <>
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">I’m a<span className="text-primary"> front-end developer</span> from El Salvador</h1>

                    <p className="mt-3 text-sm text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>
                    <button type="button" className="py-2.5 px-5 my-4 text-sm font-medium text-white focus:outline-none border border-primary hover:bg-primary100 ">Download resume</button>

                </div>
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={picture} alt="" />

            </div>


            <div className="py-10 w-3/4 mt-10 mx-auto border border-secondary">
                <blockquote>
                    <p className="text-2xl italic font-medium text-secondary text-center overflow-auto">"I’m not a great programmer; I’m just a good programmer with great habits."</p>
                </blockquote>
                <p className="pr-3 font-light text-center text-secondary">- Kent Beck</p>
            </div>
        </>


    )
}