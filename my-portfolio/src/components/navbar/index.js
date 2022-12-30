import "./index.css";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdMenu, MdClose } from "react-icons/md";
import {
  TbLetterS,
  TbLetterH,
  TbLetterA,
  TbLetterM,
  TbLetterR,
} from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = React.useState("#home");
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-container-logo">
            <HashLink smooth to="#home" className="navbar-container-logo-name">
              <TbLetterS />
              <TbLetterH />
              <TbLetterA />
              <TbLetterR />
              <TbLetterM />
              <TbLetterA />
            </HashLink>
          </div>
          <div className="navbar-container-links">
            <HashLink
              className={active === "#home" ? "active" : "navbar-links-item"}
              to="#home"
              smooth
              onClick={() => setActive("#home")}
            >
              Home
            </HashLink>
            <HashLink
              className={active === "#about" ? "active" : "navbar-links-item"}
              to="#about"
              smooth
              onClick={() => setActive("#about")}
            >
              About
            </HashLink>
            <HashLink
              className={active === "#skills" ? "active" : "navbar-links-item"}
              to="#skills"
              smooth
              onClick={() => setActive("#skills")}
            >
              Skills
            </HashLink>
            <HashLink
              className={
                active === "#projects" ? "active" : "navbar-links-item"
              }
              to="#projects"
              smooth
              onClick={() => setActive("#projects")}
            >
              Projects
            </HashLink>
            <HashLink
              className={active === "#awards" ? "active" : "navbar-links-item"}
              to="#awards"
              smooth
              onClick={() => setActive("#awards")}
            >
              Awards
            </HashLink>
            <HashLink
              className={
                active === "#contacts" ? "active" : "navbar-links-item"
              }
              to="#contacts"
              smooth
              onClick={() => setActive("#contacts")}
            >
              Contact
            </HashLink>
            <a
              href="https://github.com/dharmen8980"
              target="_blank"
              rel="noreferrer"
              className="navbar-links-item-linkedin"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://www.linkedin.com/in/dharmendra-sharma-b67549225"
              target="_blank"
              rel="noreferrer"
              className="navbar-links-item-github"
            >
              <SiGithub />
            </a>
          </div>
        </div>
      </nav>

      <nav className="mobile">
        <div className="mobile-logo">
          <HashLink smooth to="#home" className="mobile-logo-name">
            <TbLetterS />
            <TbLetterH />
            <TbLetterA />
            <TbLetterR />
            <TbLetterM />
            <TbLetterA />
          </HashLink>
        </div>
        {expanded ? (
          <>
            <div className="flex row-auto">
              <div className="flex row-auto gap-4 mr-2 text-xl ">
                <a
                  href="https://www.linkedin.com/in/dharmendra-sharma-b67549225"
                  target="_blank"
                  rel="noreferrer"
                  className="navbar-links-item-linkedin"
                >
                  <SiLinkedin />
                </a>
                <a
                  href="https://github.com/dharmen8980"
                  target="_blank"
                  rel="noreferrer"
                  className="navbar-links-item-github"
                >
                  <SiGithub />
                </a>
              </div>
              <MdClose
                onClick={() => setExpanded(!expanded)}
                className="mobile-menu"
              />
              <div className="mobile-container">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <HashLink
                          smooth
                          to="#home"
                          onClick={() => setExpanded(!expanded)}
                          className="mobile-container-item"
                        >
                          Home
                        </HashLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <HashLink
                          smooth
                          to="#about"
                          onClick={() => setExpanded(!expanded)}
                          className="mobile-container-item"
                        >
                          About
                        </HashLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <HashLink
                          smooth
                          to="#skills"
                          onClick={() => setExpanded(!expanded)}
                          className="mobile-container-item"
                        >
                          Skills
                        </HashLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <HashLink
                          smooth
                          to="#projects"
                          onClick={() => setExpanded(!expanded)}
                          className="mobile-container-item"
                        >
                          Projects
                        </HashLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <HashLink
                          smooth
                          to="#awards"
                          onClick={() => setExpanded(!expanded)}
                          className="mobile-container-item"
                        >
                          Awards
                        </HashLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <HashLink
                          smooth
                          to="#contacts"
                          onClick={() => setExpanded(!expanded)}
                          className="mobile-container-item"
                        >
                          Contact
                        </HashLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row">
              <div className="flex row-auto gap-4 mr-2 text-xl">
                <a
                  href="https://www.linkedin.com/in/dharmendra-sharma-b67549225"
                  target="_blank"
                  rel="noreferrer"
                  className="navbar-links-item-linkedin"
                >
                  <SiLinkedin />
                </a>
                <a
                  href="https://github.com/dharmen8980"
                  target="_blank"
                  rel="noreferrer"
                  className="navbar-links-item-github"
                >
                  <SiGithub />
                </a>
              </div>
              <MdMenu
                onClick={() => setExpanded(!expanded)}
                className="mobile-menu"
              />
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
