import AnimalCard from "../../components/AnimalCard";
import { mammals } from "../../data/animals";

const Home = () => {
  return (
    <div>
      <div className="animal-list">
        {mammals.map((animal) => (
          <AnimalCard key={animal.name} animal={animal} />
        ))}
      </div>
    </div>
  );
};
export default Home;
