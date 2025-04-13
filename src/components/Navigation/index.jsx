import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = ({ layout = "default" }) => {
  const getLinkClass = (isActive) => {
    const base = styles.link;
    const layoutLink = styles[`${layout}_link`] || "";
    const layoutActive = isActive ? styles[`${layout}_linkActive`] || "" : "";

    return `${base} ${layoutLink} ${layoutActive}`;
  };

  return (
    <nav className={`${styles.nav} ${styles[layout] || ""}`}>
      <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
        Home
      </NavLink>
      <NavLink
        to="/mammals"
        className={({ isActive }) => getLinkClass(isActive)}
      >
        Mammals
      </NavLink>
      <NavLink
        to="/reptiles"
        className={({ isActive }) => getLinkClass(isActive)}
      >
        Reptiles
      </NavLink>
      <NavLink to="/birds" className={({ isActive }) => getLinkClass(isActive)}>
        Birds
      </NavLink>
      <NavLink to="/shop" className={({ isActive }) => getLinkClass(isActive)}>
        Shop
      </NavLink>
    </nav>
  );
};

export default Navigation;
