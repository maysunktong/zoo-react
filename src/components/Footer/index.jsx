import styles from "./footer.module.css";
import Logo from "/assets/logo/logo.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <img src={Logo} alt="logo" width={200} />
        <h3>Open Hours</h3>
        <p>Monday - Friday: 8 AM - 7 PM</p>
        <p>Saturday - Sunday: 9 AM - 6 PM</p>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Sanctuary Zoo | May Sunktong</p>
      </div>
    </div>
  );
};
export default Footer;
