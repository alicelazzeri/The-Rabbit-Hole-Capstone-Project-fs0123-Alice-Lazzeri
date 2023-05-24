import { Card } from "react-bootstrap";
import flowers from "../assets/images/flowers.png";
import logo from "../assets/images/logo.png";
import RegistrationForm from "./RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="loginContainer">
      <Card className="d-flex flex-column flex-md-row align-items-center">
        <Card.Img className="flowersBackground d-none d-md-flex" src={flowers} />
        <Card.Body className="loginForm mx-5">
          <Card.Text>
            <img className="rounded-circle mb-4" width={80} height={80} src={logo} alt="Logo pic" />
            <h1 className="loginTitle">The Rabbit Hole</h1>
            <RegistrationForm />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegistrationPage;
