import { useState } from "react";
import { Col, FormGroup, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import LoadingSpinnerSmall from "./LoadingSpinnerSmall";
import { useNavigate } from "react-router-dom";
import RegistrationToast from "./RegistrationToast";

const RegistrationForm = () => {
  const [name, nameChange] = useState("");
  const [surname, surnameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = async e => {
    e.preventDefault();
    let registrationObj = { name, surname, email, password };
    console.log(registrationObj);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationObj),
    })
      .then(response => {
        setShowToast(true);
        navigate("/login");
      })
      .catch(err => {
        return err.message;
      });

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="formContainer">
      <Row>
        <Col>
          <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
            <Form.Control
              required
              className="registerInput"
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => nameChange(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInput2" label="Surname" className="mb-3">
            <Form.Control
              required
              className="registerInput"
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={e => surnameChange(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <FloatingLabel controlId="floatingInput3" label="Email address" className="mb-3">
        <Form.Control
          required
          className="loginInput"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={e => emailChange(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          required
          className="loginInput"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => passwordChange(e.target.value)}
        />
      </FloatingLabel>
      <div className="d-flex justify-content-between lign-items-center">
        <FormGroup className="mb-3 mt-3 loginCheckbox">
          <Form.Check label="Remember me" />
        </FormGroup>
      </div>
      {isLoading ? (
        <LoadingSpinnerSmall />
      ) : (
        <button type="submit" className="loginBtn" onClick={handleFormSubmit}>
          Create account
        </button>
      )}
      {showToast && <RegistrationToast />}
    </div>
  );
};

export default RegistrationForm;
