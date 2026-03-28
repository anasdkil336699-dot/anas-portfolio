// src/Header.js
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <h1>Anas Portfolio</h1>

      <nav>
        <button
          id="menu-toggle"
          aria-label="Toggle Navigation"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        <ul id="nav-menu" className={isMenuOpen ? "show-menu" : ""}>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#cv">CV</a>
          </li>

          <li>
            <a href="#documents">Certificates & Documents</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
