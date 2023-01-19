interface Props {
    title: string;
}
export const Divider = ({ title }: Props) => {
    return (
        <div className="container px-6 py-10 mx-auto">
            <ol className="flex items-center w-full text-3xl font-medium text-center">
                <li className="flex items-center w-full mb-4 text-xl font-extrabold leading-none tracking-tight text-white md:text-2xl lg:text-3xl after:w-full after:border-b after:border-primary after:border-1 after:mx-6 xl:after:mx-10">
                    <span className="flex items-center">
                        <span className="text-primary">#</span>{title}
                    </span>
                </li>
            </ol>
        </div>
    )
}