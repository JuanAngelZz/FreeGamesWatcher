import { NavLink as NavLinkReactRouter } from "react-router-dom";

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter
      to={to}
      {...props}
      className={({ isActive }) => {
        return isActive ? "text-red-600 text-lg" : "text-lg hover:opacity-70";
      }}
    >
      {children}
    </NavLinkReactRouter>
  );
};

export default NavLink;
