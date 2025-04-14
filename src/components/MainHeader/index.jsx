import { motion } from "framer-motion";
import logo from "../../../public/assets/logo/logo.png";
import LanguageSwitcher from "../LanguageSwitcher";
import Navigation from "../Navigation";
import styles from "./header.module.css";

const MainHeader = () => {
  return (
    <motion.div
      key="box"
      initial={{ opacity: 1, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={styles.headerContainer}
    >
      <header className={styles.header}>
        <div className={styles.langSwitcherContainer}>
          <LanguageSwitcher />
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" width={200} />
          </div>
          <Navigation layout="main" />
        </div>
      </header>
    </motion.div>
  );
};
export default MainHeader;
