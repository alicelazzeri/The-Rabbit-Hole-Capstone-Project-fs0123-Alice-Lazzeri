import { Card, Form, FormGroup } from "react-bootstrap";
import flowers from "../assets/images/flowers.png";
import logo from "../assets/images/logo.png";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginContainer">
      <Card className="d-flex flex-column flex-md-row align-items-center">
        <Card.Img className="flowersBackground d-none d-md-flex" src={flowers} />
        <Card.Body className="loginForm mx-5">
          <Card.Text>
            <img className="rounded-circle mb-4" width={80} height={80} src={logo} alt="Logo pic" />
            <h1 className="loginTitle">The Rabbit Hole</h1>
            <LoginForm />
            <div className="d-flex justify-content-between lign-items-center">
              <FormGroup className="mb-3 mt-3 loginCheckbox">
                <Form.Check label="Remember me" />
              </FormGroup>
              <Link className="text-decoration-none">
                <p className="forgotPassword text-end mt-3">Forgot password?</p>
              </Link>
            </div>
          </Card.Text>
          <p className="register">New on The Rabbit Hole?</p>
          <Link to="/register" className="createAccountLink">
            <button className="createAccount">Create Account</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
