import "../page.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Awards = () => {
  const [pelicanIndex, setPelicanIndex] = useState(0);
  const [acmindex, setAcmIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const prevpelicanIndex = useRef(pelicanIndex);
  const prevacmIndex = useRef(acmindex);

  useEffect(() => {
    if (pelicanIndex < 0) {
      setPelicanIndex(0);
    }
    if (pelicanIndex > 3) {
      setPelicanIndex(3);
    }
    if (pelicanIndex > prevpelicanIndex.current) {
      setAnimation("right");
    } else {
      setAnimation("left");
    }
    prevpelicanIndex.current = pelicanIndex;
  }, [pelicanIndex]);

  useEffect(() => {
    if (acmindex < 0) {
      setAcmIndex(0);
    }
    if (acmindex > 3) {
      setAcmIndex(3);
    }
    if (acmindex > prevacmIndex.current) {
      setAnimation("right");
    } else {
      setAnimation("left");
    }
    prevacmIndex.current = acmindex;
  }, [acmindex]);
  return (
    <div className="page overflow-x-hidden" id="awards">
      <h1>Leadership and Awards</h1>
      <div className="mx-8">
        <div className="card">
          <div className="card-header bg-slate-300 flex items-center justify-between">
            <div>
              <BsChevronLeft
                onClick={() => setPelicanIndex(pelicanIndex - 1)}
                className="bg-white text-3xl h-[6rem]"
              />
            </div>
            <div>
              <img
                src="pelican_image4.jpeg"
                alt=""
                className={pelicanIndex === 0 ? animation : "hidden"}
              />
              <img
                src="pelican_image1.jpeg"
                alt=""
                className={pelicanIndex === 1 ? animation : "hidden"}
              />
              <img
                src="pelican_image2.jpeg"
                alt=""
                className={pelicanIndex === 2 ? animation : "hidden"}
              />
              <img
                src="pelican_image3.jpeg"
                alt=""
                className={pelicanIndex === 3 ? animation : "hidden"}
              />
            </div>
            <div>
              <BsChevronRight
                onClick={() => setPelicanIndex(pelicanIndex + 1)}
                className=" bg-white text-3xl h-[6rem]"
              />
            </div>
          </div>
          <div className="card-body">
            <p>
              <b>Team Leader: </b> The Entrepreneurship Pelican Cup, secured{" "}
              <b>2</b>
              <sup>nd</sup> place
            </p>
            <p>
              <b>Description: </b>The Entrepreneurship Pelican Cup is the
              premier business plan competition for the state of Louisiana with
              one of the largest cash prizes in the nation. The goal is to
              inspire participants and the community to think entrepreneurially
              by rewarding creativity, professionalism, and hard work.
            </p>
            <p>
              <b>Key skills developed:</b>
            </p>
            <ul className="list-disc pl-8">
              <p>
                <li>
                  <b>Leadership: </b>Through my experience leading a team in the
                  development of a tech project and preparing a strategic plan
                  and detailed analysis, I have honed my ability to take charge
                  and guide a project to completion.
                </li>
                <li>
                  <b>Problem solving: </b>Identifying and solving problems that
                  arose during the development of my tech project allowed me to
                  improve my problem-solving skills, an essential skill for any
                  developer
                </li>
                <li>
                  <b>Communication: </b>My experience effectively communicating
                  my ideas and plans to my team and to competition judges has
                  helped me to develop my ability to clearly convey technical
                  concepts, an important skill for any developer.
                </li>
                <li>
                  <b>Time management: </b>Managing my time effectively in order
                  to complete the project within the competition deadline has
                  helped me to improve my time management skills, a critical
                  skill for any developer.
                </li>
                <li>
                  <b>Business acumen: </b>Participating in the competition and
                  gaining a deep understanding of business concepts such as
                  market analysis and financial planning has helped me to
                  improve my business acumen, a valuable skill for any
                  developer.
                </li>
              </p>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-header bg-slate-300  flex items-center justify-between">
            <div>
              <BsChevronLeft
                onClick={() => setAcmIndex(acmindex - 1)}
                className="bg-white text-3xl h-[6rem]"
              />
            </div>
            <div>
              <img
                src="acm_image1.jpeg"
                alt=""
                className={acmindex === 0 ? animation : "hidden"}
              />
              <img
                src="acm_image2.jpeg"
                alt=""
                className={acmindex === 1 ? animation : "hidden"}
              />
              <img
                src="acm_image3.jpeg"
                alt=""
                className={acmindex === 2 ? animation : "hidden"}
              />
              <img
                src="acm_image4.jpeg"
                alt=""
                className={acmindex === 3 ? animation : "hidden"}
              />
            </div>
            <div>
              <BsChevronRight
                onClick={() => setAcmIndex(acmindex + 1)}
                className=" bg-white text-3xl h-[6rem]"
              />
            </div>
          </div>
          <div className="card-body">
            <p>
              <b>Vice-President: </b> Association for Computing Machinery (ACM)
              Student Chapter at The University of Louisiana at Monroe
            </p>
            <p>
              <b>Description: </b>The Association for Computing Machinery (ACM)
              is a professional organization for computer scientists and
              professionals in the field of computer science.ACM's members
              include researchers, practitioners, and educators in the field of
              computer science.
            </p>
            <p>
              <b>Skills learned and developed:</b>
            </p>
            <ul className="list-disc pl-14 pt-4">
              <li>
                <b>Leadership: </b>Through my role as Vice President, I have had
                the opportunity to lead and manage various ACM events and
                initiatives.
              </li>
              <li>
                <b>Organizational skills: </b>In my role as Vice President, I
                have had to manage and plan multiple events and initiatives
                concurrently. This has helped me to improve my organizational
                skills, allowing me to effectively manage my time and resources.
              </li>
              <li>
                <b>Communication: </b>As Vice President, I have had to
                communicate with members, partners, and sponsors to coordinate
                events and initiatives. This has helped me to develop my
                communication skills, allowing me to effectively convey ideas
                and plans to a variety of audiences.
              </li>
              <li>
                <b>Networking: </b>As Vice President, I have had the opportunity
                to network with industry professionals and build relationships
                with key stakeholders. This has helped me to improve my
                networking skills, which are valuable for any developer looking
                to build a career in the industry.
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-header bg-slate-300">
            <img
              src="guest_image.jpeg"
              alt=""
              className="mx-auto right h-[20rem]"
            />
          </div>
          <div className="card-body">
            <p>
              <b>Guest Speaker: </b> Google Developer Student Club (GDSC) at The
              University of Louisiana at Monroe
            </p>
            <p>
              <b>Description: </b>Google Developer Student Clubs (GDCS) is a
              program run by Google for students who are interested in Google
              technologies. These clubs provide a platform for students to learn
              and collaborate on projects using Google's developer technologies,
              including Android, Cloud, and web development.
            </p>
            <p>
              <b>Skills learned and developed:</b>
            </p>
            <ul className="list-disc pl-14 pt-4">
              <li>
                <b>Technical expertise: </b>My experience teaching students the
                basics of Git and GitHub and introducing them to basic Git
                commands allowed me to deepen my understanding and knowledge of
                these technologies. This is an important skill for any
                developer, as it allows us to stay up to date with the latest
                technologies and tools in the field.
              </li>
              <li>
                <b>Mentorship: </b>My role as a guest speaker at the GDCS gave
                me the opportunity to mentor and guide students as they learn
                about Google technologies. This experience has improved my
                ability to provide guidance and support to others, an important
                skill for any developer.
              </li>
              <li>
                <b>Communication: </b>Through my experience as a guest speaker
                for the Google Developer Student Club at ULM, I have developed
                my ability to clearly convey technical concepts and teach
                others.
              </li>
              <li>
                <b>Leadership: </b>Being invited to speak at the Google
                Developer Student Club demonstrates my leadership and expertise
                in the field, as well as my ability to share my knowledge with
                others
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-header bg-slate-300">
            <img
              src="honor_image.jpeg"
              alt=""
              className="mx-auto right h-[20rem]"
            />
          </div>
          <div className="card-body">
            <p>
              <b>Honored member: </b> Upsilon Pi Epsilon (UPE), an international
              honor society
            </p>
            <p>
              <b>Description: </b>As an honored member of Upsilon Pi Epsilon, I
              have been recognized for my outstanding achievements in the field
              of computer science. This international honor society is dedicated
              to the promotion of the computing and information disciplines and
              acknowledges the academic excellence of its members. Being a
              member of Upsilon Pi Epsilon demonstrates my commitment to the
              highest standards of academic and professional excellence in the
              field of computer science. It also showcases my passion for
              staying current in the rapidly changing field of technology and my
              dedication to my studies and professional development. This
              distinction is a testament to myhard work and dedication to my
              craft, and thus I believe it is a valuable addition to mycareer
              portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
