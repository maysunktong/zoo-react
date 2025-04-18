import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../../context/SidebarContext";
import Footer from "../Footer";
import MainHeader from "../MainHeader";
import Sidebar from "../Sidebar";
import styles from "./mainlayout.module.css";

const MainLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <MainHeader />
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

export default MainLayout;
