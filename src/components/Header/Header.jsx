import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navLinkClass =
    "relative font-medium transition-colors text-gray-700 hover:text-blue-600";
  const activeClass =
    "after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:bg-blue-600";

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition-colors"
        >
          MegaBlog
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>

          {authStatus ? (
            <>
              <NavLink
                to="/all-posts"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                All Posts
              </NavLink>

              <NavLink
                to="/add-post"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                Create
              </NavLink>

              <LogoutBtn />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
