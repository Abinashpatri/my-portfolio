import React from "react";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Abinash.
          <br />
          Front End Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <button>Hire me</button>
            <a>Download resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <a href="https://www.linkedin.com/in/abinashpatri/"><FaLinkedin size={32}/></a>
            <a href="https://www.github.com/abinashpatri/"><FaGithub size={32} /></a>
            
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
