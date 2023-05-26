import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async e => {
    e.preventDefault();
    let registrationObj = { name, surname, email, password };
    console.log(registrationObj);

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationObj),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        throw new Error("Registration failed.");
      }
    } catch (err) {
      console.log(err.message);
    }
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
              onChange={e => setName(e.target.value)}
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
              onChange={e => setSurname(e.target.value)}
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
          onChange={e => setEmail(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          required
          className="loginInput"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FloatingLabel>

      <button type="submit" className="loginBtn" onClick={handleFormSubmit}>
        Create account
      </button>
    </div>
  );
};

export default RegistrationForm;
