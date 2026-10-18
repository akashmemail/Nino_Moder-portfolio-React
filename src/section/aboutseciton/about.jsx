import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./about.css";

function Sectionabout() {
  return (
    <Row sx={12} md={1} className="g-4">
      <Col>
        <Card className="aboutCard">
          <Card.Body>
            <Card.Title className="company">COMPANY I WORKED WITH</Card.Title>
            <Card.Text>
              <ul className="list">
                <li>
                  <i class="fa-brands fa-dropbox"></i>Google
                </li>
                <li>
                  <i class="fa-solid fa-snowflake"></i>slack
                </li>
                <li>
                  <i class="fa-brands fa-amazon"></i> amazon
                </li>
                <li>
                  <i class="fa-solid fa-sun"></i>Wamart
                </li>
                <li>
                  <i class="fa-brands fa-dropbox"></i>Linkedin
                </li>
              </ul>
            </Card.Text>
            <Card.Text className="sectionabout">
              <Card.Text style={{ fontSize: "3rem" }} className="about">
                About Me
              </Card.Text>
              <Card.Text className="sectionaboutText">
                <p>
                  i am Nino Walker, a seasoned UX designer with over 8 years of
                  experience in crafting intuitve and engaging digital
                  experiences. My journey began with a background in graphic
                  design, where i descoverd my passion for understanding user
                  behavior and transating it inti seamless interactions.
                </p>
                <Card.Text className="years">
                  <div className="years">
                    <div>
                      <h2>8+</h2>
                      <span>Year Of Experience</span>
                    </div>
                    <div>
                      <h2>1K+</h2>
                      <span>Completed Projects</span>
                    </div>
                    <div>
                      <h2>90%+</h2>
                      <span>Client Satisfactions</span>
                    </div>
                  </div>
                </Card.Text>
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Sectionabout;
