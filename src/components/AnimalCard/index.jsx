import { Link, useLocation } from "react-router-dom";
import styles from "./animalcard.module.css";

const AnimalCard = ({ animal }) => {
  const { pathname } = useLocation();

  const basePath = pathname.split("/")[1]; 
  const slug = animal.name.toLowerCase().replaceAll(" ", "-");
  const isCategoryPage = ["mammals", "birds", "reptiles"].includes(basePath);
  const linkTarget = isCategoryPage ? `/${basePath}/${slug}` : `/${slug}`;

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
