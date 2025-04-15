import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import MainHeader from "../MainHeader";
import styles from "./shop.module.css"

const ShopLayout = () => {
  return (
    <>
      <MainHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default ShopLayout;
