// src/Header.js
import React from "react";

// STEP 1: Import the 'useState' hook from React
import { useState } from "react";

export default function Header() {
  // STEP 2: Create a state variable to track if the menu is open
  // 'isMenuOpen' is our "memory". It starts as 'false' (closed).
  // 'setIsMenuOpen' is the *only* function we use to update it.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // STEP 3: Create a function to toggle the state
  // This runs when the button is clicked
  const toggleMenu = () => {
    // This flips the value from false -> true or true -> false
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        {/* STEP 4: Attach the 'toggleMenu' function to the button's 'onClick' event
          [cite: 4362-4364, 6225-6229]
        */}
        <button
          id="menu-toggle"
          aria-label="Toggle Navigation"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        {/* STEP 5: Make the 'className' dynamic based on our state.
          We use a "ternary operator" ( condition ? value_if_true : value_if_false )
          This replaces the old getElementById/classList.toggle()
        */}
        <ul id="nav-menu" className={isMenuOpen ? "show-menu" : ""}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#cv">CV</a>
          </li>
          <li>
            <a href="#documents">Documents</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
