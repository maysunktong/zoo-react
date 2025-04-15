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
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default SubPageLayout;
