import { Container, Row } from "react-bootstrap";
import "./home.css";
import Sectionabout from "../../section/aboutseciton/about";
import Servicesection from "../../section/service/service";

import Emaigsection from "../../section/EmaigeSection/emaigesection";
import Testinomials from "../../section/testinomails/testinomials";
import Story from "../../section/storysection/story";

import ContactMe from "../../section/CONTACT ME/contactme";
import Footer from "../../section/fottersection/footer";

function Homesecreen() {
  return (
    <div className="container mt-4 ">
      <h1 className="nino">NINO WALKER</h1>
      <Container>
        <div className="ninowal">
          <div className="revies">
            <span>100+ reviews (4.96 of 5)</span>
            <h5>
              five-star reviews form my esteemed <br /> clients
            </h5>
          </div>
          <div className="homeImage">
            <img
              src="https://nino-reactvit.vercel.app/assets/images/about/me.jpg"
              alt=""
            />
          </div>
          <div className="homebutton">
            <h5>
              Hi, i'm walker, a passionate UX <br />
              Designer dedicated to creating user- <br />
              friendly digital experiences
            </h5>
            <button>Get In touch</button>
          </div>
        </div>
      </Container>
      <Sectionabout />
      <Servicesection />
      <Emaigsection />
      <Testinomials />
      <Story />
      <ContactMe />
    </div>
  );
}
export default Homesecreen;
