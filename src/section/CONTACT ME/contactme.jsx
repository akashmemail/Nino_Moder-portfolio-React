import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contactme.css";

function ContactMe() {
  return (
    <Row xs={1} md={1} className="g-4">
      <div className="storyh1">
        <h1>CONTACT ME</h1>
      </div>
      <Col>
        <div className="contactForm">
          <div className="contacticons">
            <Card className="contectbg">
              <Card.Body>
                <Card.Title>
                  <i class="fa-solid fa-location-dot"></i>
                </Card.Title>
                <Card.Title>OUR OFFICE :</Card.Title>
                <Card.Text>Jurain,Dhaka Bangladesh</Card.Text>
                <Card.Title>
                  <i class="fa-solid fa-headphones"></i>
                </Card.Title>
                <Card.Title>CONTACT NUMBER:</Card.Title>
                <Card.Text>+1234321521</Card.Text>
                <Card.Title>
                  <i class="fa-regular fa-envelope"></i>
                </Card.Title>
                <Card.Title>EMAIL US:</Card.Title>
                <Card.Text>websitename@gmail.com</Card.Text>
                <Card.Title>SOCIALS</Card.Title>
                <div className="contectIcon">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-solid fa-x"></i>
                  <i class="fa-brands fa-github"></i>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="formcards">
            <Card style={{ padding: "30px" }}>
              <div className="contectInput">
                <label>FULL NAME</label>
                <input type="text" placeholder="write your full name" />
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input type="email" placeholder="hello0@websitename.com" />
              </div>
              <div className="form">
                <label htmlFor="SUBJECT">SUBJECT</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="write Your subject"
                />
              </div>
              <div className="textArea">
                <label htmlFor="">YOUR MESSAGE</label>
                <textarea
                  type="text"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <div className="contectbutton">
                <button>Send me message</button>
              </div>
            </Card>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ContactMe;
