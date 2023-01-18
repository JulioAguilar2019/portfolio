interface Props {
    children: React.ReactNode
}

export const LayoutComponent = ({ children }: Props) => {
    return (
        <div
            className="bg-background min-h-screen"
        >{children}</div>
    )
}