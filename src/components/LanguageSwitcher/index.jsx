import { useTranslation } from "react-i18next";
import styles from "./langswitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className={styles.langContainer}>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">🇺🇸</option>
        <option value="sv">🇸🇪</option>
        <option value="th">🇹🇭</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
