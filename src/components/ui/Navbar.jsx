import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
  const location = useLocation();

  const dropdown = useRef(null);

  const [dropdownIsOpen, setDropdownIsOpen] = useState("");

  const closeDropdown = (e) => {
    if (
      dropdown.current &&
      dropdownIsOpen &&
      !dropdown.current.contains(e.target)
    ) {
      setDropdownIsOpen(false);
    }
  };

  document.addEventListener("mousedown", closeDropdown);

  return (
    <header className="border-gray-200 bg-gray-900 py-4 px-7">
      <nav className="w-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          FreeGames<span className="text-red-600">Watcher</span>
        </Link>
        <ul className="flex gap-6 items-center">
          <li>
            <NavLink to="/find">Find</NavLink>
          </li>
          <li>
            <button
              ref={dropdown}
              className={
                location.pathname.includes("categories")
                  ? "text-lg text-red-600"
                  : "text-lg hover:text-gray-400"
              }
              onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
            >
              Categories
              {dropdownIsOpen && (
                <div className="dropdown absolute z-10 top-14 bg-gray-800 p-2 rounded-md shadow-md text-white text-start text-xs">
                  <ul className="p-2">
                    <li>
                      <NavLink to="/categories/new-games">New Games</NavLink>
                    </li>
                    <li>
                      <NavLink to="/categories/popular-games">
                        Popular Games
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/categories/best-games">Best Games</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </li>
          <li>
            <NavLink to="/week">Weekly Free Games</NavLink>
          </li>
        </ul>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="py-2 px-4 bg-gray-700 rounded-3xl focus:ring-1 focus:ring-blue-900"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
