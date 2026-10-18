import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./story.css";
function Story() {
  return (
    <CardGroup>
      <Card>
        <div className="Storyimage">
          <div className="storyImage">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/14528488/pexels-photo-14528488.jpeg?_gl=1*1vv6t3l*_ga*MTA3MjQ1NzQyMC4xNzQ3MTUyMzg4*_ga_8JE65Q40S6*czE3OTIwNDc5MjEkbzI0NyRnMSR0MTc5MjA0ODE2NSRqNTEkbDAkaDA."
            />
          </div>
          <div className="storyimage2">
            <Card.Body>
              <Card.Text>POSTED ON AUG 28</Card.Text>
              <Card.Title className="storytitle">
                <h1>
                  CREATE A LANGING PAGE THAT <br /> PERFORMS GREAT
                </h1>
              </Card.Title>
            </Card.Body>
            <button className="buttonRead">
              Read more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="Storyimage">
          <div className="storyImage">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?_gl=1*1cmcxzb*_ga*MTA3MjQ1NzQyMC4xNzQ3MTUyMzg4*_ga_8JE65Q40S6*czE3OTIwNDc5MjEkbzI0NyRnMSR0MTc5MjA0Nzk2MCRqMjEkbDAkaDA."
            />
          </div>
          <div className="storyimage2">
            <Card.Body>
              <Card.Text>POSTED ON AUG 28</Card.Text>
              <Card.Title className="storytitle">
                <h1>
                  STARTING AND GROWING A <br /> CAREER IN WEB DESIGN
                </h1>
              </Card.Title>
            </Card.Body>
            <button className="buttonRead">
              Read more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="Storyimage">
          <div className="storyImage">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/8354544/pexels-photo-8354544.jpeg?_gl=1*109ocb5*_ga*MTA3MjQ1NzQyMC4xNzQ3MTUyMzg4*_ga_8JE65Q40S6*czE3OTIwNDc5MjEkbzI0NyRnMSR0MTc5MjA0ODA5MSRqMjAkbDAkaDA."
            />
          </div>
          <div className="storyimage2">
            <Card.Body>
              <Card.Text>POSTED ON AUG 28</Card.Text>
              <Card.Title className="storytitle">
                <h1>
                  HOW CAN DESIGNERS PREPARE <br /> FOR THE FUTURE?
                </h1>
              </Card.Title>
            </Card.Body>
            <button className="buttonRead">
              Read more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </Card>
    </CardGroup>
  );
}

export default Story;
