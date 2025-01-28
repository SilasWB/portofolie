import { useRoutes } from "react-router-dom"
import Portofolio from "./pages/portofolio"
import Index from "./pages"

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/portofolio",
      element: <Portofolio />,
    },

  ])

  return (
    <>
      {routes}
    </>
  )
}

export default App
