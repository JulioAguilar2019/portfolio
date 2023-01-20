import { PublicRoutes } from "@/models"
import { AboutPage, ContactPage, HomePage, NotFoundPage, ProjectsPage } from "@/pages"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path={PublicRoutes.HOME} element={<HomePage />} />
                <Route path={PublicRoutes.PROJECTS} element={<ProjectsPage />} />
                <Route path={PublicRoutes.ABOUT} element={<AboutPage />} />
                <Route path={PublicRoutes.CONTACT} element={<ContactPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>

        </>
    )
}