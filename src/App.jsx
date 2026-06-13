import AppRoutes from "./routes"
import useAuthInit from "./hooks/useAuthInit"

const App = () => {
  useAuthInit()
  //
  return <AppRoutes />
}

export default App