// import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import styles from "./animalcard.module.css";

const AnimalCard = ({ animal }) => {
  // const { t } = useTranslation();
  // const animalInfo = t(`animals.${animal.name}`, { returnObjects: true });

  const { pathname } = useLocation();

  const slug = animal.name.toLowerCase().replaceAll(" ", "-");
  const isCategoryPage = /\/(mammals|birds|reptiles)$/.test(pathname);
  const linkTarget = isCategoryPage ? `${pathname}/${slug}` : `/${slug}`;

  return (
    <div className={styles.animalCardContainer}>
      <Link to={linkTarget}>
        <div className={styles.animalCard}>
          <img src={animal.imageUrl} alt="animal" />
          <p>{animal.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default AnimalCard;
