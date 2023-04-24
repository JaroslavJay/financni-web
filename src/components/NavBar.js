import React, { useState } from "react";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import logo from "../images/brand.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  /* useEffect zkouška */
  const hideMenu = () => {
    setShowMenu(false);
  };
  /* */

  return (
    <nav>
      <Link className="logo" to="/" onClick={hideMenu}>
        <img src={logo} alt=""></img>
      </Link>
    
      <div class="hamburger" onClick={toggleMenu}>
        {showMenu ? <FaTimes size={25} /> : <GiHamburgerMenu size={25} />}
      </div>
      <ul className={`${showMenu ? "menu active" : "menu notactive"}`}>
        <li>
          <Link to="/" onClick={hideMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={hideMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={hideMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={hideMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
