import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import MainHeader from "../MainHeader";
import Sidebar from "../Sidebar";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
