import HeroImage from "../../components/HeroImage";
import reptile from "/assets/animals/reptile.jpg";

const Reptiles = () => {
  return (
    <HeroImage
      image={reptile}
      buttonText="Explore reptiles"
      header="Reptiles"
      subheader="Uncover the secrets of ancient reptiles — from slithering snakes to sun-loving lizards."
    />
  );
};
export default Reptiles;
