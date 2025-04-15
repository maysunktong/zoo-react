import { motion } from "framer-motion";
import logo from "/assets/logo/logo.png";
import LanguageSwitcher from "../LanguageSwitcher";
import Navigation from "../Navigation";
import styles from "./subpageheader.module.css";

const SubPageHeader = () => {
  return (
    <motion.div
      key="box"
      initial={{ opacity: 1, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.headerContainer}
    >
      <header className={styles.header}>
        <div className={styles.langSwitcherContainer}>
          <LanguageSwitcher />
        </div>
        <div className={styles.menuContainer}>
          <img src={logo} alt="logo" width={200} />
          <Navigation layout="subpage" />
        </div>
      </header>
    </motion.div>
  );
};
export default SubPageHeader;
