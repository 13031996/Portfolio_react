import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/shalu-chaudhary-a40370129/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/13031996" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
