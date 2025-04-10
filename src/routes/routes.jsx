import Layout from "../components/Layout";
import Birds from "../pages/Birds";
import Home from "../pages/Home";
import Mammals from "../pages/Mammals";
import Reptiles from "../pages/Reptiles";
import Shop from "../pages/Shop";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mammals", element: <Mammals /> },
      { path: "/birds", element: <Birds /> },
      { path: "/reptiles", element: <Reptiles /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
];

export default routes;
