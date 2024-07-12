import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../services/userContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = React.useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };
  return (
    <header className="h-16 w-full flex space-x-10 justify-between items-center sticky top-0 inset-x-0 z-50 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-black text-teal-100">
      <div className="logo">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tighter leading-snug"
        >
          <h1>Techknow</h1>
        </NavLink>
      </div>
      <div className="links hidden md:flex space-x-4 items-center text-sm font-semibold">
        {["Quizzes", "Login", "Signup"].map((lnk) =>
          (lnk === "Profile" && !user) ||
          (lnk === "Quizzes" && !user) ? null : (lnk === "Login" ||
              lnk === "Signup") &&
            user ? null : (
            <NavLink key={lnk} className="group" to={`/${lnk.toLowerCase()}`}>
              <span>
                {lnk === "Login" ? "🔓" : null} {lnk.replace("_", " ")}
              </span>
              <span className="flex h-[2px] translate-y-2 bg-black w-0 group-hover:w-full rounded-full duration-300 ease-in-out"></span>
            </NavLink>
          )
        )}
        {user && (
          <button
            onClick={() => handleLogout()}
            className="group border-none outline-none"
          >
            <span>Logout 🔒</span>
            <span className="flex h-[2px] translate-y-2 bg-black w-0 group-hover:w-full rounded-full duration-300 ease-in-out"></span>
          </button>
        )}
      </div>
      <span className="h-[2px] bg-gray-500/35 absolute left-24 -translate-x-2.5 right-28 top-14"></span>
    </header>
  );
}

export default Header;
