import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import MainHeader from "../MainHeader";
import Sidebar from "../Sidebar";
import styles from "./layout.module.css"

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <main className={styles.main}>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
