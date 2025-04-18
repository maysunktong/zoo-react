import { motion } from "motion/react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../../context/SidebarContext";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SubPageHeader from "../SubPageHeader";
import styles from "./subpagelayout.module.css";

const SubPageLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
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
    </motion.div>
  );
};
export default SubPageLayout;
