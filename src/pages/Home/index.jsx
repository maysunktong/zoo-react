import HeroImage from "../../components/HeroImage";
import tiger from "/assets/animals/tiger.jpg";

const Home = ({onClick}) => {
  return (
    <HeroImage
      image={tiger}
      buttonText="Explore Zoo"
      header="Our Sanctuary Zoo"
      subheader="Wildlife wonders, cared for and protected with heart."
      onClick={onClick} 
    />
  );
};
export default Home;
