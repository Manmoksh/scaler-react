import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
export default function Navbar() {
  return (
    <div className="flex  space-x-8 items-center pl-3 py-4 h-18 border-b-2">
      <img className="w-[50px] rounded-[50%]" src={logo} alt="Movie logo" />
      <Link to="/" className="text-blue-500 text-3xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        Watchlist
      </Link>
    </div>
  );
}
