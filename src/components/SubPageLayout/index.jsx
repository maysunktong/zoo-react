import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../../context/SidebarContext";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SubPageHeader from "../SubPageHeader";
import styles from "./subpagelayout.module.css";

const SubPageLayout = () => {
  return (
    <>
      <SubPageHeader />
      <SidebarProvider>
        <main className={styles.main}>
          <Sidebar />
          <section className={styles.outletContainer}>
            <div className={styles.outlet}>
              <Outlet />
            </div>
          </section>
        </main>
      </SidebarProvider>
      <Footer />
    </>
  );
};
export default SubPageLayout;
