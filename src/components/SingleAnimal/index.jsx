import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { allAnimals } from "../../data/animals";
import styles from "./singleanimal.module.css";

const slugify = (str) => str.toLowerCase().replaceAll(" ", "-");

const SingleAnimal = () => {
  const { animalName } = useParams();
  const animal = allAnimals.find((a) => slugify(a.name) === animalName);

  if (!animal) return <div>Animal not found.</div>;

  const { t } = useTranslation();
  const animalInfo = t(`animals.${animal.name}`, { returnObjects: true });

  return (
    <motion.div
      key={animalName}
      initial={{ opacity: 0.9, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
    >
      <div className={styles.imageContainer}>
        <img src={animal.previewImageUrl} alt={animal.name} width={200} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textField}>
          <h1>{animalInfo.name}</h1>
          <h2>{animalInfo.description}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleAnimal;
