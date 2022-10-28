import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#/" className="footer_logo">
        SHALU
      </a>
      <ul className="permalinks">
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/shalu.chaudhary.90281">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/idyllicshalu">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/ShaluCh46640580">
          <ImTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; SHALU CHAUDHARY. All rights reversed.</small>
      </div>
    </footer>
  );
};

export default Footer;
