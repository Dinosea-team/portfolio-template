import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#external">외부활동</a>
        </li>
      </ul>
    </nav>
  );
}
