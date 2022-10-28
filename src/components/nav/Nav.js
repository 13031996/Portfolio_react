import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiBook3Fill } from "react-icons/ri";
import { RiMessage3Fill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#/");
  return (
    <nav>
      <a
        href="#/"
        onClick={() => setActiveNav("#/")}
        className={activeNav === "#/" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiBook3Fill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiMessage3Fill />
      </a>
    </nav>
  );
};

export default Nav;
