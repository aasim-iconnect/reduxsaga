import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="reduxsaga">Redux Saga</NavLink>
      <NavLink to="weather">Weather</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  );
};

export default Navbar;
