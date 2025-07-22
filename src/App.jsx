import { Outlet } from "react-router"
import { Nav } from "./components/Nav.jsx"

function App() {

  return (
    <>
      <Nav />
      <h1 className="title">Seuss Treasury</h1>
      <Outlet />
    </>
  )
}

export default App
