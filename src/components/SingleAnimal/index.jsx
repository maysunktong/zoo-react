import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { allAnimals } from "../../data/animals";

const slugify = (str) => str.toLowerCase().replaceAll(" ", "-");

const SingleAnimal = () => {
  const { animalName } = useParams();
  const animal = allAnimals.find((a) => slugify(a.name) === animalName);

  if (!animal) return <div>Animal not found.</div>;

  const { t } = useTranslation();
  const animalInfo = t(`animals.${animal.name}`, { returnObjects: true });

  return (
    <div>
      <img src={animal.imageUrl} alt={animal.name} width={200} />
      <h1>{animalInfo.name}</h1>
      <h2>{animalInfo.description}</h2>
    </div>
  );
};

export default SingleAnimal;
