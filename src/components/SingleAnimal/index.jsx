import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GiLifeBar } from "react-icons/gi";
import { HiMiniMagnifyingGlassCircle } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { allAnimals } from "../../data/animals";
import ReadMoreSection from "../Readmore";
import styles from "./singleanimal.module.css";

const slugify = (str) => str.toLowerCase().replaceAll(" ", "-");

const SingleAnimal = () => {
  const { animalName } = useParams();
  const animal = allAnimals.find((a) => slugify(a.name) === animalName);

  if (!animal) return <div>Animal not found.</div>;

  // Translation
  const { t } = useTranslation();
  const animalInfo = t(`animals.${animal.name}`, { returnObjects: true });
  const tInterface = t(`ui.interface`, { returnObjects: true });

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
      className={styles.animalContainer}
    >
      <div className={styles.imageContainer}>
        <img src={animal.previewImageUrl} alt={animal.name} width={200} />
        <Link to={`/${slugify(animal.group)}`} className={styles.groupButton}>
          {tInterface.visit} {animalInfo.group}
        </Link>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textField}>
          <h1>{animalInfo.name}</h1>
          <div className={styles.infobox}>
            <p>
              <HiMiniMagnifyingGlassCircle color="#ddbea9" size={40} />
              <div>
                <h3>{tInterface.group}</h3>
                <p>{animalInfo.group}</p>
              </div>
            </p>
            <p>
              <GiLifeBar color="#ff8fab" size={40} />
              <div>
                <h3>{tInterface.lifespan}</h3>
                <p> {animalInfo.lifespan}</p>
              </div>
            </p>
            <p>
              <IoLocation color="#588157" size={40} />
              <div>
                <h3>{tInterface.found}</h3>
                <p>{animalInfo.found}</p>
              </div>
            </p>
          </div>
          <ReadMoreSection preview={<p>{animalInfo.description}</p>}>
            <div>
              {tInterface.length}: {animalInfo.length}
            </div>
            <div>
              {tInterface.weight}: {animalInfo.weight}
            </div>
            <div>
              {tInterface.food}: {animalInfo.food}
            </div>
            <div>
              {tInterface.group}: {animalInfo.group}
            </div>
          </ReadMoreSection>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleAnimal;
