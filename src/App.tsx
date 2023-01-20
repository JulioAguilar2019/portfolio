import { LayoutComponent } from "./components"
import { HomePage } from "./pages"
import { AppRouter } from "./routes"


function App() {


  return (
    <>
      <LayoutComponent >
        <AppRouter />
      </LayoutComponent>
    </>

  )
}

export default App
