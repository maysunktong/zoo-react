import { useState } from "react";
import styles from "./readmore.module.css";

const ReadMoreSection = ({ preview, children, buttonLabels = { more: "Read More", less: "Read Less" } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      {preview}
      {isExpanded && (
        <div className={styles.expandedSection}>
          {children}
        </div>
      )}
      <button onClick={toggleExpanded} className={styles.toggleButton}>
        {isExpanded ? buttonLabels.less : buttonLabels.more}
      </button>
    </div>
  );
};

export default ReadMoreSection;
