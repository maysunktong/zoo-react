import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import MainHeader from "../MainHeader";

const ShopLayout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default ShopLayout;
