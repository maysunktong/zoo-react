import { useTranslation } from "react-i18next";

const AnimalCard = ({ animal }) => {
  const { t } = useTranslation();
  const animalInfo = t(`animals.${animal.name}`, { returnObjects: true });

  return (
    <div>
       <h2>{animalInfo.name}</h2>
       <p>{animalInfo.description}</p>
    </div>
  );
};

export default AnimalCard;
