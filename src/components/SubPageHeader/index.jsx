import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import Navigation from "../Navigation";
import styles from "./subpageheader.module.css";
import logo from "/assets/logo/logo.png";

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
          <Link to={"/"}>
            <img src={logo} alt="logo" width={200} />
          </Link>
          <Navigation layout="subpage" />
        </div>
      </header>
    </motion.div>
  );
};
export default SubPageHeader;
