import styles from "./home.module.css";
import HeroImage from "/assets/animals/tiger.jpg"

const Home = () => {
  return (
    <div className={styles.imageContainer}>
      <img src={HeroImage} alt="hero image" width={200} />
    </div>
  );
};
export default Home;
