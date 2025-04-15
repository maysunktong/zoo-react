import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { allAnimals, birds, mammals, reptiles } from "../../data/animals";
import AnimalCard from "../AnimalCard";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { pathname } = useLocation();

  const animalsArray = (() => {
    if (pathname.includes("mammals")) return mammals;
    if (pathname.includes("reptiles")) return reptiles;
    if (pathname.includes("birds")) return birds;
    return allAnimals;
  })();

  return (
    <motion.div
      className={styles.sidebar}
      animate={{ width: isOpen ? "300px" : "40px" }}
      initial={false}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
      >
        {isOpen && (
          <div className={styles.content}>
            {animalsArray.map((animal) => (
              <AnimalCard key={animal.name} animal={animal} />
            ))}
          </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleBtn}>
          {isOpen ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
