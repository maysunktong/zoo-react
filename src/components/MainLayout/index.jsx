import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import MainHeader from "../MainHeader";
import Sidebar from "../Sidebar";
import styles from "./mainlayout.module.css";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
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
export default MainLayout;
