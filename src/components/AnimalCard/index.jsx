import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import styles from "./animalcard.module.css";

const AnimalCard = ({ animal }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setIsOpen } = useSidebar();

  const basePath = pathname.split("/")[1];
  const slug = animal.name.toLowerCase().replaceAll(" ", "-");
  const isCategoryPage = ["mammals", "birds", "reptiles"].includes(basePath);
  const linkTarget = isCategoryPage ? `/${basePath}/${slug}` : `/${slug}`;
  const isActive = pathname === linkTarget;

  const handleClick = (e) => {
    setIsOpen(false);
    if (isActive) {
      e.preventDefault();
      if (isCategoryPage) {
        navigate(`/${basePath}`);
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className={styles.animalCardContainer}>
      <Link to={linkTarget} onClick={handleClick}>
        <div
          className={`${styles.animalCard} ${isActive ? styles.active : ""}`}
        >
          <img src={animal.imageUrl} alt={animal.name} />
          <p>{animal.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default AnimalCard;
