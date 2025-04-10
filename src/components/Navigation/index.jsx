import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/mammals">Mammals</NavLink>
      <NavLink to="/reptiles">Reptiles</NavLink>
      <NavLink to="/birds">Birds</NavLink>
      <NavLink to="/shop">Shop</NavLink>
    </nav>
  );
};
export default Navigation;
