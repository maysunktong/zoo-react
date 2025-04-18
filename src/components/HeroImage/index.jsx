import styles from "./heroimage.module.css";

const HeroImage = ({ image, buttonText }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={image} alt="hero image" width={200} />
      <div className={styles.heroText}>
        <h1>Welcome to Sanctuary Zoo</h1>
        <p>Meet our animals and activities</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};
export default HeroImage;
