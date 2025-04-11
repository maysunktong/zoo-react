import AnimalCard from "../../components/AnimalCard";
import { allAnimals } from "../../data/animals";

const Home = () => {
  return (
    <div>
      {allAnimals.map((animal) => (
        <AnimalCard key={animal.name} animal={animal} />
      ))}
    </div>
  );
};
export default Home;
