import { useTranslation } from "react-i18next";

const AnimalCard = ({ animal, animalImage }) => {
  const { t } = useTranslation();
  const animalInfo = t(`animals.${animal.name}`, { returnObjects: true });

  return (
    <div>
      <img src={animalImage} alt="" width={200} />
       <h2>{animal.name}</h2>
    </div>
  );
};

export default AnimalCard;
