import { Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const RegistrationForm = () => {
  return (
    <div className="formContainer">
      <Row>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
            <Form.Control required className="registerInput" type="text" placeholder="Name" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Surname" className="mb-3">
            <Form.Control required className="registerInput" type="text" placeholder="Surname" />
          </FloatingLabel>
        </Col>
      </Row>

      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control required className="loginInput" type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control required className="loginInput" type="password" placeholder="Password" />
      </FloatingLabel>
    </div>
  );
};

export default RegistrationForm;
