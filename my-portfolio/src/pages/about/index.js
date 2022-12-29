import "../page.scss";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

const About = () => {
  const [iseducation, setEducation] = React.useState(true);

  return (
    <div className="page" id="about">
      <h1>About me</h1>
      <div>
        <p>
          As a full-stack developer with expertise in Java and Python, I have a
          strong foundation in both front-end and back-end development. I am
          skilled at delivering high-quality, scalable software solutions using
          technologies such as HTML, CSS, JavaScript, and TypeScript, and I have
          a strong understanding of responsive design.
        </p>
        <p>
          I am also proficient in back-end development and skilled in using SQL
          and NoSQL databases. I have experience with cloud computing and am
          able to effectively manage and maintain servers and networks using
          Linux and Unix.
        </p>
        <p>
          In addition to my technical skills, I have a demonstrated history of
          project management and have used tools such as Jira to deliver
          projects on time and within budget. I am also proficient in version
          control using Git and have strong communication and problem-solving
          skills.
        </p>
        <p>
          I am passionate about using my skills and experience to help
          organizations achieve their goals through the use of technology, and I
          am excited to continue learning and growing as a developer.
        </p>
      </div>
      <div className="grid grid-cols-2 mt-6">
        <p>
          <button
            className={
              !iseducation
                ? "bg-white text-black border-solid border-2 shadow-lg"
                : "border-solid border-2 shadow-lg"
            }
            onClick={() => setEducation(true)}
          >
            Education
            <FaGraduationCap className="ml-2 text-xl" />
          </button>
        </p>
        <p>
          <button
            className={
              iseducation
                ? "bg-white text-black border-solid border-2  shadow-lg"
                : " border-solid border-2 shadow-lg "
            }
            onClick={() => setEducation(false)}
          >
            Experience
            <FaBriefcase className="mt-1 ml-2" />
          </button>
        </p>
      </div>
      <div className={iseducation ? "timeline animate-fade" : "hidden"}>
        <div>
          <ul>
            <li>
              <div className="timeline-item-right">
                <h3 className="timeline-item-right-title">2018</h3>
                <p className="timeline-item-description">
                  GoldenGate International High School
                  <br />
                  Nepal
                  <br /> <span>2016 - 2018</span>
                </p>
              </div>
              <GoPrimitiveDot className="relative top-[-9rem] right-[-5.85rem] text-xl" />
            </li>
            <li>
              <div className="timeline-item-left">
                <h3 className="timeline-item-left-title">2023</h3>
                <p className="timeline-item-description">
                  <span>Computer Science,</span> The University of Louisiana
                  Monroe, Monroe, LA <br />
                  <span>2019 - 2023</span>
                </p>
              </div>
              <GoPrimitiveDot className="relative top-[-9rem] right-[-5.85rem] text-xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className={!iseducation ? "timeline animate-fade" : "hidden"}>
        <ul>
          <li>
            <div className="timeline-item-right">
              <h3 className="timeline-item-right-title">2020</h3>
              <p className="timeline-item-description">
                <span>Software Developer </span>at Computer Science Department,
                <br />
                The University of Louisiana at Monroe
                <br />
                Monroe, LA
                <br />
                <span>Sep 2020 - Jul 2021</span>
              </p>
            </div>
            <GoPrimitiveDot className="relative top-[-14.4rem] right-[-5.85rem] text-xl" />
          </li>
          <li>
            <div className="timeline-item-left">
              <h3 className="timeline-item-left-title">2022</h3>
              <p className="timeline-item-description">
                <span>Full-Stack Developer</span> at IBM Tech Grant
                <br />
                Monroe, LA
                <br />
                <span>Jan 2022 - Present</span>
              </p>
            </div>
            <GoPrimitiveDot className="relative top-[-9rem] right-[-5.85rem] text-xl" />
          </li>
          <li>
            <div className="timeline-item-right">
              <h3 className="timeline-item-right-title">2022</h3>
              <p className="timeline-item-description">
                <span>Software Developer </span> and{" "}
                <span>Project Manager</span> <br /> at Virtual Hut <br />
                The University of Louisiana at Monroe
                <br />
                Monroe, LA
                <br />
                <span>Aug 2022 - Present</span>
              </p>
            </div>
            <GoPrimitiveDot className="relative top-[-14.5rem] right-[-5.85rem] text-xl" />
          </li>
        </ul>
      </div>
      <p className="text-center mt-4">
        <a
          href="https://drive.google.com/file/d/1fHk1XnOn177t-T_U5AST-1iYpj7ew1EX/view?usp=share_link"
          download
        >
          <button>Download CV</button>
        </a>
      </p>
    </div>
  );
};

export default About;
