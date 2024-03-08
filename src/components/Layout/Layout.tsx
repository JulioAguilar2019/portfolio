import { Footer } from "../footer/Footer"
import { Navbar } from "../Navbar"

interface Props {
    children: React.ReactNode
}

export const LayoutComponent = ({ children }: Props) => {
    return (
        <div
            className="flex flex-col bg-background min-h-screen"
        >
            <Navbar />
            <div className="container px-6 mx-auto flex-grow">
                {children}

            </div>
            <Footer />
        </div>
    )
}