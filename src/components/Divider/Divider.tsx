
import arrowIcon from '@/assets/about/arrow.svg';
import { PublicRoutes } from '@/models';
import { NavLink } from 'react-router-dom';
interface Props {
    title: string;
    line: boolean;
    button: boolean;
}
export const Divider = ({ title, line, button }: Props) => {
    const withLine = 'after:w-full after:border-b after:border-primary after:border-1 after:mx-6 xl:after:mx-10'
    return (
        <div className="container px-6 py-10 mx-auto">
            <ol className="flex items-center w-full text-3xl font-medium text-center">
                <li className={`flex items-center w-full h-full text-xl font-extrabold leading-none tracking-tight text-white md:text-2xl lg:text-3xl ${line && withLine}`}>
                    <span className="flex items-center">
                        <span className="text-primary">#</span>{title}
                    </span>
                </li>
                {
                    button &&
                    <NavLink to={PublicRoutes.PROJECTS} className="text-white text-sm">
                        <span className="inline-flex items-center whitespace-nowrap">
                            <p className='mr-1'>View all</p>
                            <img src={arrowIcon} className="h-3 sm:h-4 " alt="icon" />
                        </span>
                    </NavLink>
                }

            </ol>
        </div>
    )
}