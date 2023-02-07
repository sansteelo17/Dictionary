import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-2/4 mx-auto text-white p-4">
      <ul className="flex w-10/12 lg:w-1/4 mx-auto justify-between font-bold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-sky-600" : null)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favs"
            className={({ isActive }) => (isActive ? "text-sky-600" : null)}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
