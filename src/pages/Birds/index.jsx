import HeroImage from "../../components/HeroImage";
import birds from "/assets/animals/birds.jpg";

const Birds = () => {
  return (
    <HeroImage
      image={birds}
      buttonText="Explore birds"
      header="Birds"
      subheader="Explore the fascinating world of birds — from tiny hummingbirds to mighty eagles"
    />
  );
};
export default Birds;
