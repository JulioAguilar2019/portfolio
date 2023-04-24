
import arrowIcon from '@/assets/about/arrow.svg';
import { PublicRoutes } from '@/models';
import { NavLink } from 'react-router-dom';
interface Props {
    title: string;
    line?: boolean;
    button?: boolean;
}
export const Divider = ({ title, line = false, button = false }: Props) => {
    const withLine = 'after:md:w-full after:md:border-b after:md:border-primary after:md:border-1 after:md:mx-6 xl:after:md:mx-10'
    return (
        <div className="container px-6 py-10 mx-auto">
            <ol className="flex items-center w-full text-3xl font-medium text-center">
                <li className={`flex items-center w-full h-full text-xl font-extrabold leading-none tracking-tight text-white md:text-2xl lg:text-3xl ${line && withLine}`}>
                    <span className="inline-flex items-center whitespace-nowrap">
                        <span className="text-primary">#</span>{title}
                    </span>
                </li>
                {
                    button &&
                    <NavLink to={PublicRoutes.PROJECTS} className="text-white text-sm">
                        <span className="inline-flex items-center whitespace-nowrap transition-colors duration-200 ease-in-out hover:text-primary">
                            <p className='mr-1 '>View all</p>
                            <svg
                                className="h-3 sm:h-4 w-auto fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.207 11.293l-7.5-7.5C9.52 3.604 9.266 3.5 9 3.5s-.52.104-.707.293c-.39.39-.39 1.023 0 1.414L14.086 10l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.024 0-1.414z" />
                            </svg>
                        </span>
                    </NavLink>
                }

            </ol>
        </div>
    )

}