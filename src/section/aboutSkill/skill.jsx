import Card from "react-bootstrap/Card";

import "./skill.css";

function Skillcard() {
  return (
    <div style={{ backgroundColor: "#FEF3E2" }}>
      <div className="skillhedingh">
        <h1>PROFESSIONAL SKILLS</h1>
      </div>

      <div className="skillcards">
        <div className="SKILLIMG">
          <img
            src="https://nino-reactvit.vercel.app/assets/images/skills/skill1.png"
            alt=""
          />
          <h4>FIGMA</h4>
        </div>
        <div className="SKILLIMG">
          <img
            src="https://nino-reactvit.vercel.app/assets/images/skills/skill2.png"
            alt=""
          />
          <h4>TAILWAND</h4>
        </div>
        <div className="SKILLIMG">
          <img
            src="https://nino-reactvit.vercel.app/assets/images/skills/skill3.png"
            alt=""
          />
          <h4>PHOTOSHOP</h4>
        </div>
        <div className="SKILLIMG">
          <img
            src="http://nino-reactvit.vercel.app/assets/images/skills/skill4.png"
            alt=""
          />
          <h4>WORDPRESS</h4>
        </div>
        <div className="SKILLIMG">
          <img
            src="https://nino-reactvit.vercel.app/assets/images/skills/skill5.png"
            alt=""
          />
          <h4>ANGULAR</h4>
        </div>
        <div className="SKILLIMG">
          <img
            src="https://nino-reactvit.vercel.app/assets/images/skills/skill6.png"
            alt=""
          />
          <h4>WEBFLOW</h4>
        </div>
        <div className="SKILLIMG">
          <img
            src="https://nino-reactvit.vercel.app/assets/images/skills/skill7.png"
            alt=""
          />
          <h4>PYTHON</h4>
        </div>
        <div className="SKILLIMG">
          <img
            src="https://nino-reactvit.vercel.app/assets/images/skills/skill8.png"
            alt=""
          />
          <h4>SKETCH</h4>
        </div>
      </div>
    </div>
  );
}

export default Skillcard;
