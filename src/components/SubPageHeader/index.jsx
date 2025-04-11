import logo from "../../../public/assets/logo/logo.png";
import Navigation from "../Navigation";
import styles from "./subpageheader.module.css"

const SubPageHeader = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" width={200} />
      <Navigation />
    </header>
  );
};
export default SubPageHeader;
