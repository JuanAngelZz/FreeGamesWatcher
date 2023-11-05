import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import { BiSearch, BiSolidCategory, BiSolidGift } from "react-icons/bi";
import { useForm } from "../../hooks/useForm";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dropdown = useRef(null);

  const [dropdownIsOpen, setDropdownIsOpen] = useState("");

  const { values, handleChange } = useForm({ search: "" });

  const { search } = values;

  useEffect(() => {
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

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [dropdownIsOpen]);

  const handleSearch = (e, text) => {
    e.preventDefault();
    navigate(`/find?name=${text}&tags=&sort=relevance`);
  };

  return (
    <header className="border-gray-200 bg-gray-900 py-4 px-7 mb-10">
      <nav className="w-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img
            src="/FGW-logo.png"
            alt=""
            className="w-9 mx-2"
          />
          FreeGames<span className="text-red-600">Watcher</span>
        </Link>
        <ul className="flex gap-6 items-center">
          <li>
            <NavLink to="/find">
              <BiSearch className="inline-block mr-1 relative -top-[2px]" />
              Find
            </NavLink>
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
              <BiSolidCategory className="inline-block mr-1 relative -top-[2px]" />
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
            <NavLink to="/weekly-games">
              <BiSolidGift className="inline-block mr-1 relative -top-[2px]" />
              Weekly Free Games
            </NavLink>
          </li>
        </ul>
        <form onSubmit={(e) => handleSearch(e, search)}>
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search..."
            className="py-2 px-4 border-gray-600 bg-gray-700 rounded-3xl shadow-lg shadow-slate-950 focus:ring-1 focus:ring-blue-900"
            value={search}
            onChange={handleChange}
          />
          <button type="submit">
            <BiSearch className="text-slate-400 h-5 w-5 absolute top-7 right-10 fill-current" />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
