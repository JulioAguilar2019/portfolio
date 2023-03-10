import Logo from '@/assets/home/logoFinal.svg';
import { PublicRoutes } from '@/models';
import { NavLink } from 'react-router-dom';
import { Dropdown } from '../dropdown/dropdown';


const active: string = 'block py-2 pl-3 pr-4 text-white md:border-0  md:p-0'
const isNotActive: string = 'block py-2 pl-3 pr-4 text-secondary hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0'

const classNavBar = (state: boolean): string => {
    return state ? active : isNotActive
}



export const Navbar = () => {


    return (
        <nav className="bg-background border-gray-200 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">
                    <img src={Logo} className="h-6 mr-3 sm:h-8" alt="Julio Logo" />
                    <span className="font-bold text-white text-lg whitespace-nowrap ">Julio Aguilar</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <NavLink to={PublicRoutes.HOME} className={({ isActive }) => classNavBar(isActive)}><strong className="text-primary p-0.5">#</strong>Home</NavLink>

                        </li>
                        <li>
                            <NavLink to={PublicRoutes.PROJECTS} className={({ isActive }) => classNavBar(isActive)}><strong className="text-primary p-0.5">#</strong>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to={PublicRoutes.ABOUT} className={({ isActive }) => classNavBar(isActive)}><strong className="text-primary p-0.5">#</strong>About-me</NavLink>
                        </li>
                        <li>
                            <NavLink to={PublicRoutes.CONTACT} className={({ isActive }) => classNavBar(isActive)}><strong className="text-primary ">#</strong>Contact</NavLink>
                        </li>
                        <li>
                            <Dropdown />
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}