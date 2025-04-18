import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = ({ layout = "default" }) => {
  const getLinkClass = (isActive) => {
    const base = styles.link;
    const layoutLink = styles[`${layout}_link`] || "";
    const layoutActive = isActive ? styles[`${layout}_linkActive`] || "" : "";

    return `${base} ${layoutLink} ${layoutActive}`;
  };

  // Translation
  const { t } = useTranslation();
  const tNavigation = t(`ui.navigation`, { returnObjects: true });

  return (
    <nav className={`${styles.nav} ${styles[layout] || ""}`}>
      <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
        {tNavigation.home}
      </NavLink>
      <NavLink
        to="/mammals"
        className={({ isActive }) => getLinkClass(isActive)}
      >
        {tNavigation.mammals}
      </NavLink>
      <NavLink
        to="/reptiles"
        className={({ isActive }) => getLinkClass(isActive)}
      >
        {tNavigation.reptiles}
      </NavLink>
      <NavLink to="/birds" className={({ isActive }) => getLinkClass(isActive)}>
        {tNavigation.birds}
      </NavLink>
      {/* <NavLink to="/shop" className={({ isActive }) => getLinkClass(isActive)}>
        {tNavigation.shop}
      </NavLink> */}
    </nav>
  );
};

export default Navigation;
