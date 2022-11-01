import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import Skills from "./Skills.js";
// import { ImRadioChecked2 } from "react-icons/im";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Education</h5>
              <small>B.Tech</small>
            </article>
            <article className="about_card">
              <FaUserPlus className="about_icon" />
              <h5>Skills</h5>
              <small>React+Others</small>
            </article>
            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>5+Completed</small>
            </article>
          </div>

          <p>
            SHALU CHAUDHARY.I have compeleted my B.Tech(Civil Engineering) with
            75.6%. At present I am learning Web Development. <br /> I am
            committed to learning and self-development so that I can
            consistently achive better result.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
