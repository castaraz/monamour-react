import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>
        Inicio
      </NavLink>
      <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : undefined)}>
        Contacto
      </NavLink>
      <NavLink to="/recetas" className={({ isActive }) => (isActive ? "active" : undefined)}>
        Recetas
      </NavLink>
    </nav>
  );
}
