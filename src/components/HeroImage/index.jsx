import { useTranslation } from "react-i18next";
import { useSidebar } from "../../context/SidebarContext";
import styles from "./heroimage.module.css";

const HeroImage = ({ page = "", image }) => {
  const { setIsOpen } = useSidebar();

  // Translation
  const { t } = useTranslation();
  const tHeroImage = t(`ui.hero.${page}`, { returnObjects: true });

  return (
    <div className={styles.imageContainer}>
      <img src={image} alt="hero image" width={200} />

      <div className={styles.heroText}>
        <h1>{tHeroImage.header}</h1>
        <p>{tHeroImage.subheader}</p>
        <button onClick={() => setIsOpen((prev) => !prev)}>{tHeroImage.button}</button>
      </div>
    </div>
  );
};
export default HeroImage;
