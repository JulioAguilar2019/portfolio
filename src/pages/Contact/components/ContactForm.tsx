import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';



interface FormData {
    name: string;
    email: string;
    message: string;
};

export const ContactForm = () => {
    const [t] = useTranslation('global')

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [toastMessage, setToastMessage] = useState<String>('');
    const [toastType, setToastType] = useState<String>('');
    const [toastVisible, setToastVisible] = useState<Boolean>(false);


    const showToast = (message: string, type: string) => {
        setToastMessage(message);
        setToastType(type);
        setToastVisible(true);
        setTimeout(() => {
            setToastVisible(false);
        }, 3000);
    };

    const closeToast = () => {
        setToastVisible(false);
    };

    const onSubmit = handleSubmit(
        ({ name, email, message }) => {
            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: "Julio Aguilar",
                message: message,
            };

            emailjs
                .send(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    templateParams,
                    import.meta.env.VITE_PUBLIC_KEY
                )
                .then(
                    function () {
                        showToast(t("contact.message"), "success");
                        reset();
                    },
                    function (error) {
                        showToast(t("contact.error"), "error");
                    }
                );
        },
        () => {
            if (errors.name || errors.email || errors.message) {
                showToast(t("contact.empty"), "error");
            }
        }
    );



    return (
        <>
            <div className="container px-6 py-12 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-6">
                    <div className="lg:w-1/2 lg:mx-6">
                        <h1 className="text-2xl font-semibold text-primary capitalize">
                            {t("contact.title")}
                        </h1>

                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-primary " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span className="mx-2 text-white truncate w-72">
                                    Santa Ana, El Salvador
                                </span>
                            </p>

                            <p className="flex items-start -mx-2">

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-primary" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.481 0-.237-.009-1.066-.014-1.891-2.784.6-3.369-1.133-3.369-1.133-.454-1.153-1.11-1.457-1.11-1.457-.908-.618.068-.606.068-.606 1.003.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.912.833.091-.647.349-1.086.634-1.333-2.224-.253-4.56-1.11-4.56-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.653 0 0 .84-.268 2.75 1.028a9.578 9.578 0 015 0c1.91-1.296 2.75-1.028 2.75-1.028.544 1.381.201 2.4.099 2.653.639.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.943.359.309.68.917.68 1.852 0 1.337-.012 2.419-.012 2.751 0 .266.18.576.688.479C19.137 20.166 22 16.418 22 12 22 6.477 17.523 2 12 2z" />
                                </svg>


                                <span className="mx-2 text-white truncate w-72 -400">JulioAguilar2019</span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-primary " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <span className="mx-2 text-white truncate w-72">dev.julioaguilar@gmail.com</span>
                            </p>
                        </div>

                        <div className="mt-6 w-80 md:mt-8">
                            <h3 className="text-primary">{t("contact.media")}</h3>

                            <div className="flex items-center mt-4 -mx-1.5 ">
                                <a className="mx-1.5 text-secondary transition-colors duration-300 transform hover:text-primary" href="https://github.com/JulioAguilar2019" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.481 0-.237-.009-1.066-.014-1.891-2.784.6-3.369-1.133-3.369-1.133-.454-1.153-1.11-1.457-1.11-1.457-.908-.618.068-.606.068-.606 1.003.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.912.833.091-.647.349-1.086.634-1.333-2.224-.253-4.56-1.11-4.56-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.653 0 0 .84-.268 2.75 1.028a9.578 9.578 0 015 0c1.91-1.296 2.75-1.028 2.75-1.028.544 1.381.201 2.4.099 2.653.639.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.943.359.309.68.917.68 1.852 0 1.337-.012 2.419-.012 2.751 0 .266.18.576.688.479C19.137 20.166 22 16.418 22 12 22 6.477 17.523 2 12 2z" />
                                    </svg>
                                </a>

                                <a className="mx-1.5 text-secondary transition-colors duration-300 transform hover:text-primary" href="https://www.linkedin.com/in/julio-aguilar-29314b245/" target='_blank'>
                                    <svg className="w-8 h-8" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>

                                <a className="mx-1.5 text-secondary transition-colors duration-300 transform hover:text-primary" href="#" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                    </svg>
                                </a>
                                <a className="mx-1.5 text-secondary transition-colors duration-300 transform hover:text-primary" href="https://www.instagram.com/julioaguilarlml" target='_blank'>
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:mx-6">
                        <AnimatePresence>
                            {toastVisible && (
                                <motion.div
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -100 }}
                                    transition={{ duration: 0.4 }}
                                    className={`fixed top-0 right-10 mt-4 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-md ${toastType === 'success' ? 'bg-green-500' : 'bg-red-500'
                                        } text-white z-50`}
                                >
                                    {toastMessage}
                                    <button
                                        className="absolute top-0 right-0 mt-2 mr-1 text-white focus:outline-none"
                                        onClick={closeToast}
                                    >
                                        x
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div
                            className="w-full py-10 mx-auto overflow-hidden bg-transparent border-secondary border-solid  lg:max-w-xl  ">
                            <h1 className="text-lg font-medium text-white">{t("contact.subtitle")}</h1>

                            <form onSubmit={onSubmit} className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-white" htmlFor='name'>{t("contact.labelName")}</label>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        type="text" name='name' placeholder={t("contact.placeholderName")}
                                        className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-transparent border border-secondary rounded-md" />
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-white" htmlFor='email'>{t("contact.labelEmail")}</label>
                                    <input
                                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                                        type="email" name='email' placeholder={t("contact.placeholderEmail")}
                                        className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-transparent border border-secondary rounded-md " />
                                </div>

                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm text-white dark:text-gray-200">{t("contact.labelMessage")}</label>
                                    <textarea
                                        {...register("message", { required: "Message is required" })}
                                        className="block w-full h-32 px-5 py-3 mt-2 text-white placeholder-gray-400 bg-transparent border border-secondary rounded-md md:h-48 "
                                        placeholder={t("contact.placeholderMessage")}
                                    />
                                </div>

                                <button type='submit' className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary100 hover:text-darkText">
                                    {t("contact.button")}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
