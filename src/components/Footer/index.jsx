import styles from "./footer.module.css";
import Logo from "/assets/logo/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer}>
        <img src={Logo} alt="logo" width={100} />
        <h3>Business Hours</h3>
        <p>Monday - Friday: 8 AM - 10 PM</p>
        <p>Saturday - Sunday: 9 AM - 11 PM</p>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 The Crispy Kale | May Sunktong</p>
      </div>
    </div>
  );
};
export default Footer;
