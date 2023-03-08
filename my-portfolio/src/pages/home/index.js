import "../page.css";
import React from "react";
import { MdFrontHand } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import Typewriter from "react-typewriter";

const Home = () => {
  return (
    <div className="page" id="home">
      <div className="homepage">
        <img
          src="/profile.jpeg"
          alt="Dharmendra Sharma"
          className="profile_image"
        />
        <div className="homepage-content">
          <h1 className="homepage-content-title">
            Dharmendra Sharma
            <MdFrontHand className="tilt" />
          </h1>
          <p>
            <Typewriter typing={1} loop={true} smooth>
              Hi, I'm a full-stack developer with over 2 years of experience. I
              have strong project management skills and a passion for delivering
              high-quality software solutions. On this site, you'll find
              examples of my work and information about my professional
              experience and skills. Thanks for visiting!
            </Typewriter>
          </p>
          <p>
            <HashLink to="/#contacts" smooth>
              <button
                className="hover:bg-white hover:text-black duration-1000 animate-bounce"
                href="#contact"
              >
                Say hello!
              </button>
            </HashLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
