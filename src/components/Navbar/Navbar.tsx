import Logo from '@/assets/home/logoFinal.svg';
import { PublicRoutes } from '@/models';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from '../dropdown/dropdown';


const active: string = 'block py-2 pl-3 pr-4 text-white md:border-0 md:p-0 text-primary first-letter:p-0.5 first-letter:font-bold '
const isNotActive: string = 'block py-2 pl-3 pr-4 text-secondary hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0'

const classNavBar = (state: boolean): string => {
    return state ? active : isNotActive
}

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }

        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return (
        <nav className="bg-background border-gray-200 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="flex items-center">
                    <img src={Logo} className="h-6 mr-3 sm:h-8" alt="Julio Logo" />
                    <span className="font-bold text-white text-lg whitespace-nowrap ">Julio Aguilar</span>
                </div>
                <button data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="true"
                    aria-haspopup="menu"
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>

                {/* navbar desktop */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <NavLink to={PublicRoutes.HOME} className={({ isActive }) => classNavBar(isActive)}>&gt;Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={PublicRoutes.PROJECTS} className={({ isActive }) => classNavBar(isActive)}>&gt;Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to={PublicRoutes.ABOUT} className={({ isActive }) => classNavBar(isActive)}>&gt;About-me</NavLink>
                        </li>
                        <li>
                            <NavLink to={PublicRoutes.CONTACT} className={({ isActive }) => classNavBar(isActive)}>&gt;Contact</NavLink>
                        </li>
                        <li>
                            <Dropdown />
                        </li>
                    </ul>
                </div>

                {/* navbar mobile */}
                <motion.div
                    className="fixed top-0 right-0 w-full h-full bg-gray-900 bg-opacity-75 z-50"
                    initial={{ opacity: 0, pointerEvents: "none" }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="w-64 h-full bg-background absolute top-0 right-0"
                        initial={{ x: "-100%" }}
                        animate={{ x: isOpen ? "0%" : "100%", pointerEvents: isOpen ? "all" : "none" }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex justify-end">
                                <button
                                    onClick={toggleMenu}
                                    className="self-end w-8 h-8 mt-2 mx-3 text-black bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                                >
                                    X
                                </button>
                            </div>
                            <div className="flex flex-col h-full">
                                <ul className="flex flex-col">
                                    <li className="flex-1">
                                        <NavLink
                                            to={PublicRoutes.HOME}
                                            className={({ isActive }) => classNavBar(isActive)}
                                        >
                                            <strong className="text-primary p-0.5">#</strong>Home
                                        </NavLink>
                                    </li>
                                    <li className="flex-1">
                                        <NavLink
                                            to={PublicRoutes.PROJECTS}
                                            className={({ isActive }) => classNavBar(isActive)}
                                        >
                                            <strong className="text-primary p-0.5">#</strong>Projects
                                        </NavLink>
                                    </li>
                                    <li className="flex-1">
                                        <NavLink
                                            to={PublicRoutes.ABOUT}
                                            className={({ isActive }) => classNavBar(isActive)}
                                        >
                                            <strong className="text-primary p-0.5">#</strong>About-me
                                        </NavLink>
                                    </li>
                                    <li className="flex-1">
                                        <NavLink
                                            to={PublicRoutes.CONTACT}
                                            className={({ isActive }) => classNavBar(isActive)}
                                        >
                                            <strong className="text-primary ">#</strong>Contact
                                        </NavLink>
                                    </li>
                                    <li className="flex-1 ml-3">
                                        <Dropdown />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </nav>
    )
}