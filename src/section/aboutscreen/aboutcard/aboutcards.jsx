import { Card } from "react-bootstrap";
import "./aboutcards.css";
function AboutCards() {
  return (
    <div className="aboutCards">
      <div
        style={{
          display: "flex",
          margin: "20px",
          gap: "20px",
        }}
      >
        <Card>
          <div className="aboutCard1">
            <h5>2020 - PRESENT</h5>
            <h1>WEB DEVELPER & BUSSINESS PARTNER (FULL-TIME)</h1>
            <h6>@ Envata Marketplace</h6>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. ut enim ad minim veniam, quis
              naostrud exercitaiton ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </Card>
        <Card className="aboutCard1">
          <div>
            <h5>2020-PRESENT</h5>
            <h1>BACHELOP DEGREE OF SCIENCE</h1>
            <h6>@ University of London</h6>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempr incididunt ut
              labor et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </p>
          </div>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",

          margin: "20px",
        }}
      >
        <Card className="aboutCard1">
          <div>
            <h5>2018-2020</h5>
            <h1>CEO & FOUNDER </h1>
            <h6> @ Thememaster LTD</h6>
            <p>
              Consecterur adipiscing elit, sed do eisumod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim venaim, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </Card>
        <Card>
          <div className="aboutCard1">
            <h5>2018-2020</h5>
            <h1>MASTER DEGREE OF DESIGN</h1>
            <h6>@ Envato educaiotn</h6>
            <p>
              Consetetur adiiscing elit, sed do eisusmod tempor incididunt ut
              labore et dolore magna aliqua, Ut enim ad minim veniam , qus
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          margin: "20px",
        }}
      >
        <Card>
          <div className="aboutCard1">
            <h5>2012 - 2028</h5>
            <h1>SENIOR DESIGNER</h1>
            <h6>Google</h6>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </Card>
        <Card>
          <div className="aboutCard1">
            <h5>2015 - 2018</h5>
            <h1>DEGREE OF UI & UX</h1>
            <h6>@University of world</h6>
            <p>
              Consecterur adipiscing elit,sed do eiusod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default AboutCards;
