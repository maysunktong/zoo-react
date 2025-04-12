import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SubPageHeader from "../SubPageHeader";
import styles from "./layout.module.css"

const SubPageLayout = () => {
  return (
    <>
      <SubPageHeader />
      <main className={styles.main}>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default SubPageLayout;
