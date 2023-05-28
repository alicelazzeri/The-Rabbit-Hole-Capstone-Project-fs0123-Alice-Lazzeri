import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleLogin = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const response = await fetch("http://localhost:3001/users");
        const resp = await response.json();
        console.log(resp);

        if (Object.keys(resp).length === 0) {
          console.log("Enter valid email");
        } else {
          const user = resp.find(user => user.username === username);
          if (user) {
            if (user.password === password) {
              console.log("Login successful");

              navigate("/");
            } else {
              console.log("Enter valid password");
            }
          } else {
            console.log("User not found");
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    setValidated(true);
  };

  return (
    <div className="formContainer">
      <Form noValidate validated={validated} onSubmit={handleLogin}>
        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
          <Form.Control
            required
            className="loginInput"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">Please enter a valid username.</Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
        </FloatingLabel>

        <button type="submit" className="loginBtn">
          Sign in
        </button>
      </Form>
    </div>
  );
};

export default LoginForm;
