import React from "react";
import { ImRadioChecked2 } from "react-icons/im";

const Skills = () => {
  return (
    <section>
      <h5> Here are my</h5>
      <h2>Skills</h2>
      <div className="container skill_container">
        <div className="skill_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <ImRadioChecked2 className="skill_details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <ImRadioChecked2 className="skill_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <ImRadioChecked2 className="skill_details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="skill_details">
              <ImRadioChecked2 className="skill_details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <ImRadioChecked2 className="skill_details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
