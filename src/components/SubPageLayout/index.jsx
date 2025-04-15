import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SubPageHeader from "../SubPageHeader";
import styles from "./subpagelayout.module.css";

const SubPageLayout = () => {
  return (
    <>
      <SubPageHeader />
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.outletContainer}>
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};
export default SubPageLayout;
