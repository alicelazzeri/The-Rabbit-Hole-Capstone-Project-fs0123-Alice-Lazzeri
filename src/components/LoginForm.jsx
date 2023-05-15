import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const LoginForm = () => {
  return (
    <div className="formContainer">
      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control required className="loginInput" type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control required className="loginInput" type="password" placeholder="Password" />
      </FloatingLabel>
    </div>
  );
};

export default LoginForm;
