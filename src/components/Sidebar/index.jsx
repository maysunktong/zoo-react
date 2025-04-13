import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./sidebar.module.css";
import AnimalCard from "../AnimalCard";
import { allAnimals, mammals, birds, reptiles } from "../../data/animals";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { pathname } = useLocation();

  const animals = (() => {
    if (pathname.includes("mammals")) return mammals;
    if (pathname.includes("reptiles")) return reptiles;
    if (pathname.includes("birds")) return birds;
    return allAnimals;
  })();

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleBtn}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      {isOpen && (
        <div className={styles.content}>
          {animals.map((animal) => (
            <AnimalCard
              key={animal.name}
              animal={animal}
              animalImage={animal.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
