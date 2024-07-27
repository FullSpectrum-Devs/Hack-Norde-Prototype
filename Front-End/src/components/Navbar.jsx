import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState("");
  return (
    <div className="bg-black-500">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen("Home")}
              className={`text-white  ${
                isMenuOpen === "Home" ? "bg-red-500 font-semibold" : ""
              } `}
              // Use a different class or style as needed
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen("About")}
              className={`text-white  ${
                isMenuOpen === "About" ? "bg-red-500 font-semibold" : ""
              } `}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => setIsMenuOpen("Login")}
              className={`text-white  ${
                isMenuOpen === "Login" ? "bg-red-500 font-semibold" : ""
              } `}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen("Signup")}
              className={`text-white  ${
                isMenuOpen === "Signup" ? "bg-red-500 font-semibold" : ""
              } `}
            >
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
