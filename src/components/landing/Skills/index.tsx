import React from "react";

import Skill from "./Skill";
import figmaIcon from "assets/icons/figma";
import reactIcon from "assets/icons/react-icon";
import nodeIcon from "assets/icons/node";
import sassIcon from "assets/icons/sass";
import pythonIcon from "assets/icons/python";
import uxIcon from "assets/icons/ux";
import "./style.scss";

function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="skills__container">
        <div className="section__title">
          <h3>My skill set</h3>
        </div>
        <div className="skills__lists">
          <Skill name="Front-end" detail="React, Typescript, Redux, Redux thunk, Gatsby" icon={reactIcon} />
          <Skill name="Back-end" detail="Node, Express, MongoDB" icon={nodeIcon} />
          <Skill name="Style/Library" detail="CSS, SASS, LESS, Material UI,  Bootstrap" icon={sassIcon} />

          <Skill name="Additional Languages" detail="Python" icon={pythonIcon} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
