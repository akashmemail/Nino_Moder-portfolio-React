import AboutCards from "../../section/aboutscreen/aboutcard/aboutcards";
import Abouts from "../../section/aboutscreen/aboutme";
import Skillcard from "../../section/aboutSkill/skill";

import "./about.css";

function About() {
  return (
    <div>
      <div className="Card">
        <Abouts />
      </div>
      <AboutCards />
      <Skillcard />
    </div>
  );
}
export default About;
