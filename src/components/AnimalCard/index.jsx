import { useTranslation } from "react-i18next";
import styles from "./animalcard.module.css";

const AnimalCard = ({ animal }) => {
  const { t } = useTranslation();
  const animalInfo = t(`animals.${animal.name}`, { returnObjects: true });

  return (
    <div className={styles.animalCardContainer}>
      <div className={styles.animalCard}>
        <img src={animal.imageUrl} alt="animal" />
        <p>{animal.name}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
