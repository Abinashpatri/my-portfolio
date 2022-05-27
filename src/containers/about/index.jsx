import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {DiHtml5, DiCss3, DiJavascript1, DiReact} from "react-icons/di";
import {  } from "react-icons/fa";
import { Animate } from "react-simple-animate";

import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">About me..</h3>
            <p>
              My name is Abinash Patri, an aspiring front-end developer, skilled in HTML, CSS, SASS, Javascript & react, looking for oppertunities in the field of junior front-end development roles.
              <br />
              <br />
              I'm a self-lerner, an avid reader & a good chess player & have keen interest in new technologes & also i follow indian & international affairs. 
              
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiHtml5 size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <DiCss3
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <DiJavascript1 size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var(--selected-theme-main-color)" />
              </div>
              
              
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
