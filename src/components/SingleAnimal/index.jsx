import { useParams } from "react-router-dom";
import { allAnimals } from "../../data/animals";

const slugify = (str) => str.toLowerCase().replaceAll(" ", "-");

const SingleAnimal = () => {
  const { animalName } = useParams();
  const animal = allAnimals.find(
    (a) => slugify(a.name) === animalName
  );

  if (!animal) return <div>Animal not found.</div>;

  return (
    <div>
      <h2>{animal.name}</h2>
    </div>
  );
};

export default SingleAnimal;
