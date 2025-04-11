import logo from "../../../public/assets/logo/logo.png";
import Navigation from "../Navigation";
import styles from "./header.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" width={200} />
      <Navigation />
    </header>
  );
};
export default MainHeader;
