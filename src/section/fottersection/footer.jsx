import Card from "react-bootstrap/Card";
import "./fotter.css";

function Footer() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Have a project in mind?</Card.Title>
        <Card.Text className="footertitle">LETS WORK</Card.Text>
      </Card.Body>
      <div className="fottercopyright">
        <div>
          <p>Template by Creative Personal®</p>
        </div>
        <div>
          <p>© Copyright 2026</p>
        </div>
      </div>
    </Card>
  );
}

export default Footer;
