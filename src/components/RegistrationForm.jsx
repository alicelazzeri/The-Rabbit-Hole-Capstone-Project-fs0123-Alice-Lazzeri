import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    let registrationObj = {
      name,
      surname,
      username,
      email,
      password,
      profilePic,
    };
    console.log(registrationObj);

    try {
      const response = await fetch("http://localhost:3001/users", {
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
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
              <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">Please provide a surname.</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel controlId="floatingInput4" label="Username" className="mb-3 placeholderPadding">
          <Form.Control
            required
            className="loginInput"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ textIndent: "20px" }}
          />
          <Form.Control.Feedback type="invalid">Please provide a username.</Form.Control.Feedback>
        </FloatingLabel>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            required
            className="loginInput"
            type="file"
            placeholder="Upload your profile pic here"
            value={profilePic}
            onChange={e => setProfilePic(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">Please upload a profile picture.</Form.Control.Feedback>
        </Form.Group>
        <FloatingLabel controlId="floatingInput3" label="Email address" className="mb-3">
          <Form.Control
            required
            className="loginInput"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
        </FloatingLabel>

        <button type="submit" className="loginBtn">
          Create account
        </button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
