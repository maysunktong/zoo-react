import MainLayout from "../components/MainLayout";
import ShopLayout from "../components/ShopLayout";
import SingleAnimal from "../components/SingleAnimal";
import SubPageLayout from "../components/SubPageLayout";
import Birds from "../pages/Birds";
import Home from "../pages/Home";
import Mammals from "../pages/Mammals";
import Reptiles from "../pages/Reptiles";
import Shop from "../pages/Shop";

const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: ":animalName", element: <SingleAnimal /> },
    ],
  },
  {
    element: <SubPageLayout />,
    children: [
      {
        path: "mammals",
        children: [
          { index: true, element: <Mammals /> },
          { path: ":animalName", element: <SingleAnimal /> },
        ],
      },
      {
        path: "birds",
        children: [
          { index: true, element: <Birds /> },
          { path: ":animalName", element: <SingleAnimal /> },
        ],
      },
      {
        path: "reptiles",
        children: [
          { index: true, element: <Reptiles /> },
          { path: ":animalName", element: <SingleAnimal /> },
        ],
      },
    ],
  },
  {
    element: <ShopLayout />,
    children: [{ path: "shop", element: <Shop /> }],
  },
];

export default routes;
