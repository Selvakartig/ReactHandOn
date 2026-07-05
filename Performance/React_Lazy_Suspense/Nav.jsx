import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/Admin">Admin</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
