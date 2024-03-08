interface Props {
    children: React.ReactNode;
}

export const GridProjectCard = ({ children }: Props) => {
    return (
        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {children}
        </div>
    )
}
