import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardGroup } from "react-bootstrap";
import "./emaigesection.css";

function Emaigsection() {
  return (
    <div className="Emaigsection">
      <Row xs={1} md={1} className="g-4">
        <div className="Emaigesectiontitle">
          <h3>some recent work</h3>
        </div>
        <Col className="EmaigsectionCard">
          <Card>
            <Card.Img
              className="Emaigsectionimage"
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/work1-Csl6-6Ij.jpg"
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/work2-BLkKvLrK.jpg"
            />
          </Card>
        </Col>
      </Row>
      <div className="imageSectionImage">
        <CardGroup>
          <Card>
            <Card.Img
              className="imageImg"
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/work3-Dy6IBFkG.jpg"
            />
          </Card>
          <Card>
            <Card.Img
              className="imageImg"
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/work4-29i8d8XY.jpg"
            />
          </Card>
          <Card>
            <Card.Img
              className="imageImg"
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/work5-BOIpuWyK.jpg"
            />
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Emaigsection;
