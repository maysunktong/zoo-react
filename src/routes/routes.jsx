import MainLayout from "../components/MainLayout";
import SubPageLayout from "../components/SubPageLayout";
import Birds from "../pages/Birds";
import Home from "../pages/Home";
import Mammals from "../pages/Mammals";
import Reptiles from "../pages/Reptiles";
import Shop from "../pages/Shop";

const routes = [
  {
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    element: <SubPageLayout />,
    children: [
      { path: "/mammals", element: <Mammals /> },
      { path: "/birds", element: <Birds /> },
      { path: "/reptiles", element: <Reptiles /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [{ path: "/shop", element: <Shop /> }],
  },
];

export default routes;
