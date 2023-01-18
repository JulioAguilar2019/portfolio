import { LayoutComponent, Navbar } from "./components"
import { Home } from "./pages"


function App() {


  return (
    <>
      <LayoutComponent >
        <Navbar />
        <Home />
      </LayoutComponent>
    </>

  )
}

export default App
