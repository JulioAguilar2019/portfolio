import { useState } from 'react';
import { useTranslation } from "react-i18next";

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [t, i18n] = useTranslation('global')
    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="block w-full px-4 py-2 uppercase text-secondary bg-transparent border border-gray-400  focus:border-primary focus:ring-opacity-40 focus:ring-primary focus:outline-none"
            >
                {i18n.language}
                <svg
                    className="w-5 h-5 text-secondary inline-block align-middle ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="absolute right-0 z-20 w-full  origin-top-right bg-transparent border-x border-b border-gray-400 shadow-lg outline-none "
                >
                    <button
                        className="block w-full px-4 py-2 text-sm bg-background text-white capitalize transition-colors duration-300 transform hover:bg-primary100"
                        onClick={() => i18n.changeLanguage('en')}
                    >
                        EN
                    </button>
                    <button
                        className="block w-full px-4 py-2 text-sm bg-background text-white capitalize transition-colors duration-300 transform hover:bg-primary100"
                        onClick={() => i18n.changeLanguage('es')}
                    >
                        ES
                    </button>
                </div>
            )}
        </div>
    );
};
