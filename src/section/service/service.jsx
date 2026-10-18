import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./sercive.css";

function Servicesection() {
  return (
    <div>
      <div className="sectionservice">
        <h1>SERVICES</h1>
      </div>
      <Row xs={2} md={1} className="g-4">
        <Col>
          <div className="servicCard">
            <Card>
              <Card.Body className="BrandCard">
                <div className="sericCardicon">
                  <Card.Title>01</Card.Title>
                  <Card.Title>
                    <i class="fa-solid fa-arrow-right"></i>
                  </Card.Title>
                </div>

                <Card.Title className="servicesBrand">
                  <h1>BRAND IDENTITY DESIGN</h1>
                </Card.Title>
                <Card.Text className="servictext">
                  Blend of strategic thinking and creative flaire to craft a
                  digital identity that resonates and captivates. kits you need
                  to create a true website within minutes.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <div className="sericCardicon">
                  <Card.Title>02</Card.Title>
                  <Card.Title>
                    <i class="fa-solid fa-arrow-right"></i>
                  </Card.Title>
                </div>
                <Card.Title className="sericCardicon">
                  <h1>VISUAL DESIGN</h1>
                </Card.Title>
                <Card.Text className="servictext">
                  Blend of artistic intuition with strategic insight to craft a
                  visua identity
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col>
          <div className="servicCard">
            <Card>
              <Card.Body className="BrandCard">
                <div className="sericCardicon">
                  <Card.Title>03</Card.Title>
                  <Card.Title>
                    <i class="fa-solid fa-arrow-right"></i>
                  </Card.Title>
                </div>

                <Card.Title className="servicesBrand">
                  <h1>UX RESEARCH</h1>
                </Card.Title>
                <Card.Text className="servictext">
                  Blend of artistic intuition with strategic insight to craft a
                  visua identity
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <div className="sericCardicon">
                  <Card.Title className="number">04</Card.Title>
                  <Card.Title>
                    <i class="fa-solid fa-arrow-right"></i>
                  </Card.Title>
                </div>
                <Card.Title className="sericCardicon">
                  <h1>ART DIRECTION</h1>
                </Card.Title>
                <Card.Text className="servictext">
                  <p>
                    Blend of strategic thinking and creative flaire to craft a
                    digital identity that resonates and captivates. kits you
                    need to create a true website within minutes.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Servicesection;
