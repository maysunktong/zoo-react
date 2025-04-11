import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SubPageHeader from "../SubPageHeader";

const SubPageLayout = () => {
  return (
    <>
      <SubPageHeader />
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default SubPageLayout;
