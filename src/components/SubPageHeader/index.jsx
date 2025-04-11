import logo from "../../../public/assets/logo/logo.png";
import LanguageSwitcher from "../LanguageSwitcher";
import Navigation from "../Navigation";
import styles from "./subpageheader.module.css";

const SubPageHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.langSwitcherContainer}>
        <LanguageSwitcher />
      </div>
      <div className={styles.menuContainer}>
        <img src={logo} alt="logo" width={200} />
        <Navigation />
      </div>
    </header>
  );
};
export default SubPageHeader;
