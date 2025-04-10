import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/mammals" className="nav-link">
        Mammals
      </NavLink>
      <NavLink to="/reptiles" className="nav-link">
        Reptiles
      </NavLink>
      <NavLink to="/birds" className="nav-link">
        Birds
      </NavLink>
      <NavLink to="/shop" className="nav-link">
        Shop
      </NavLink>
    </nav>
  );
};
export default Navigation;
