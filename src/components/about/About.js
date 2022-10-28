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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            consequatur accusantium facere sed, maiores corporis quos hic quas,
            nesciunt est quis dicta dolorum? Soluta, vel.
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
