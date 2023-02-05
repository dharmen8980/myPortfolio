import "../page.css";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const About = () => {
  const [iseducation, setEducation] = React.useState(true);

  return (
    <div className="page" id="about">
      <div className="about">
        <h1 className=" text-center">About me</h1>
          <p>
            As a full-stack developer with expertise in Java and Python, I have
            a strong foundation in both front-end and back-end development. I am
            skilled at delivering high-quality, scalable software solutions
            using technologies such as HTML, CSS, JavaScript, and TypeScript,
            and I have a strong understanding of responsive design.
          </p>
          <p>
            I am also proficient in back-end development and skilled in using
            SQL and NoSQL databases. I have experience with cloud computing and
            am able to effectively manage and maintain servers and networks
            using Linux and Unix.
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
            organizations achieve their goals through the use of technology, and
            I am excited to continue learning and growing as a developer.
          </p>
        <div className="about-journey">
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
        </div>
        <div className={iseducation ? "animate-fade my-4 mb-8" : "hidden"}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.primary">
                <b>2016 - 2018</b>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: "6rem" }} />
              </TimelineSeparator>
              <TimelineContent>
                GoldenGate International
                <br /> High School, <br />
                Kathmandu, Nepal
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.primary">
                <b> 2019 - 2023</b>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: "4rem" }} />
              </TimelineSeparator>
              <TimelineContent>
                Computer Science,
                <br /> The University of Louisiana at Monroe, <br />
                Monroe, LA
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div className={!iseducation ? "animate-fade my-4 mb-8" : "hidden"}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.primary">
                <b>Sep 2020 - Jul 2021</b>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: "7rem" }}  />
              </TimelineSeparator>
              <TimelineContent>
                Software Developer
                <br />
                Computer Science Department
                <br />
                The University of Louisiana at Monroe
                <br />
                Monroe, LA
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.primary">
                <b>Jan 2022 - Present</b>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: "6rem" }} />
              </TimelineSeparator>
              <TimelineContent>
                Full-Stack Developer
                <br />
                IBM Tech Grant
                <br />
                Monroe, LA
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.primary">
                <b>Aug 2022 - Present</b>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Software Developer & Project Manager
                <br />
                Virtual Hut
                <br />
                The University of Louisiana at Monroe
                <br />
                Monroe, LA
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default About;
