import React from "react";
import { Link } from "react-router-dom";
import searchLogo from "../../Assests/Group 224.png";
import Logo from "../../Assests/Group 257.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-16 border-b-2 px-12 my-3 sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <Link to="/">
            <img className="w-16 h-12" src={Logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center w-96 h-10">
        <label class="relative block w-full h-10">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-6">
            <img src={searchLogo} alt="" />
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-14 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-10"
            placeholder="Villas in Banglore"
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="navbar-end">
        <Link
          className="btn btn-xs bg-primary border-none text-white text-sm w-36 h-10"
          to="/login"
        >
          Signup/Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
