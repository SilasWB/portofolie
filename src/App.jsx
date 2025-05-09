import { useRoutes } from "react-router-dom"
import Index from "./pages/index"

function App() {
  const routes = useRoutes([
    {      
      path: "/",
      element: <Index />,
    },

  ])

  return (
    <>
      {routes}
    </>
  )
}

export default App