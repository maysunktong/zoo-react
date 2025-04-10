import { Outlet } from "react-router-dom";
import Footer from '../Footer';
import SubPageHeader from "../SubPageHeader";

const SubPageLayout = () => {
  return (
    <>
      <SubPageHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default SubPageLayout;
