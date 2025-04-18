import { useSidebar } from "../../context/SidebarContext";
import styles from "./heroimage.module.css";

const HeroImage = ({
  header = "header",
  subheader = "subheader",
  image,
  buttonText = "button",
}) => {
  const { setIsOpen } = useSidebar();

  return (
    <div className={styles.imageContainer}>
      <img src={image} alt="hero image" width={200} />
      <div className={styles.heroText}>
        <h1>{header}</h1>
        <p>{subheader}</p>
        <button onClick={() => setIsOpen(true)}>{buttonText}</button>
      </div>
    </div>
  );
};
export default HeroImage;
