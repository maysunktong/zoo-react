import routes from "./routes/routes";
import { useRoutes } from 'react-router-dom';

function App() {
  const routing = useRoutes(routes);

  return <>{routing}</>;
}

export default App;
