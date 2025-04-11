import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./langswitcher.module.css"

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className={styles.langContainer}>
      <label>{t("ui.selectLanguage")}:</label>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="sv">Svenska</option>
        <option value="th">thai</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
