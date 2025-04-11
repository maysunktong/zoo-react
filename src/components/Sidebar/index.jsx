import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleBtn}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>Sidebar content</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
