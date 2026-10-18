import Servicesection from "../../section/service/service";
import "./services.css";
import { Card } from "react-bootstrap";

function Services() {
  return (
    <div className="services">
      <Card
        style={{
          height: "500px",
        }}
      >
        <h2>SERVICES</h2>
      </Card>
      <Servicesection />
    </div>
  );
}
export default Services;
