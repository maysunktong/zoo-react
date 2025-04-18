import HeroImage from "../../components/HeroImage";
import mammals from "/assets/animals/mammals.jpg";

const Mammals = () => {
  return (
    <HeroImage
      image={mammals}
      buttonText="Explore mammals"
      header="Mammals"
      subheader="Discover the warm-blooded wonders of the animal kingdom, from lions to whales."
    />
  );
};
export default Mammals;
