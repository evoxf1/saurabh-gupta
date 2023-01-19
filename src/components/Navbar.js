import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
    <li>
      <Link
        to="/"
        className="hover:text-secondary text-3xl font hover:border-1 hover:border-yellow-600 rounded"
      >
        HOME
      </Link>
    </li>
    
    <li>
      <Link
        to='/services'
        className="hover:text-secondary text-3xl font hover:border-1 hover:border-yellow-600 rounded"
      >
        CUSTOMISATION
      </Link>
    </li>
    <li>
      <Link
        to="/aboutme"
        className="hover:text-secondary text-3xl font hover:border-1 hover:border-yellow-600 rounded"
      >
        ABOUT ME
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="hover:text-secondary text-3xl font hover:border-1 hover:border-yellow-600 rounded"
      >
        CONTACT ME
      </Link>
    </li>
  </React.Fragment>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-92 text-gray-400"
            >
              {menuItems}
            </ul>
          </div>
          <Link>
            <img
              src="/assets/images/logo.jpg"
              className="object-fill h-25 w-96 rounded-lg mx-2"
              alt="saurabh gupta"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mx-9">{menuItems}</ul>
        </div>
        <div className="navbar-end lg:visible invisible">
          <a
            href="/"
            className="btn text-secondary font-bold border-1 border-purple-600 rounded"
          >
            Download Catalogue
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
