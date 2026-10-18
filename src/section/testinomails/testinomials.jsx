import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./testiomials.css";
import { CardGroup } from "react-bootstrap";

function Testinomials() {
  return (
    <Col>
      <div className="testinHeder">
        <h1>TESTINOMIALS</h1>
      </div>
      <div className="testinomia">
        <Card className="testinImage">
          <Card.Img
            variant="top"
            src="https://nino-reactvit.vercel.app/assets/images/testimonials/author1.jpg"
          />
          <Card.Body>
            <Card.Text>
              Financial planners help people to knowledge in about how to invest
              and in save their moneye the most efficient way eve plan ner to
              {/* invest and in save their moneye the most efficient way eve plan */}
              ners hel pleople tioniio know ledige in about how.
            </Card.Text>
            <Card.Title>ZONATHON DEO</Card.Title>
            <Card.Text>CEO $ Founder x</Card.Text>
          </Card.Body>
        </Card>

        <Card className="testinImage">
          <Card.Img
            variant="top"
            src="https://nino-reactvit.vercel.app/assets/images/testimonials/author2.jpg"
          />
          <Card.Body>
            <Card.Text>
              Asian planners help people to knowledge in about how to invest and
              in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </Card.Text>

            <Card.Title>MARTIN SMITH</Card.Title>
            <Card.Text>CEO & Founder google</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <CardGroup className="testingCards">
        <Card className="testinImage">
          <Card.Img
            variant="top"
            src="https://nino-reactvit.vercel.app/assets/images/testimonials/author3.jpg"
          />
          <Card.Body>
            <Card.Text>
              Hello planner help people to knowledge in about how to invest and
              in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </Card.Text>
            <Card.Title>METHAIL DEV</Card.Title>
            <Card.Text>Managing Directo-paydesk</Card.Text>
          </Card.Body>
        </Card>
        <Card className="testinImage">
          <Card.Img
            variant="top"
            src="https://nino-reactvit.vercel.app/assets/images/testimonials/author4.jpg"
          />
          <Card.Body>
            <Card.Text>
              Financial planners help people to knowledge in about how to invest
              and in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </Card.Text>
            <Card.Title>ELIANA TWEET</Card.Title>
            <Card.Text>CEO & Founder Tesla</Card.Text>
          </Card.Body>
        </Card>
        <Card className="testinImage">
          <Card.Img
            variant="top"
            src="https://nino-reactvit.vercel.app/assets/images/testimonials/author5.jpg"
          />
          <Card.Body>
            <Card.Text>
              Yelp planners help people to knowledge in about how to invest and
              in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how
            </Card.Text>
            <Card.Title>HENRY CLARK</Card.Title>
            <Card.Text>Founder Oxyzen</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Col>
  );
}

export default Testinomials;
