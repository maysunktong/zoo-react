import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  const allRoutes = useRoutes(routes);

  return <>{allRoutes}</>;
}

export default App;
