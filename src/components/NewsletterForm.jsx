import { useState } from "react";
import { Button, FormGroup, Modal } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const SubmissionModal = props => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Form submitted successfully</h4>
        <p>
          Thank you for joining the club! Your registration will be confirmed automatically by e-mail to the given
          e-mail address.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
const NewsletterForm = () => {
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form className="newsletterForm" noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 mt-4 mt-md-5">
        <Form.Group className="mb-3 mb-md-0" as={Col} md="6" controlId="validationCustom01">
          <Form.Control required type="text" placeholder="Name" />
        </Form.Group>
        <FormGroup as={Col} md="6" controlId="validationCustom02">
          <Form.Control required type="text" placeholder="Surname" />
        </FormGroup>
      </Row>
      <Row>
        <FormGroup as={Col} md="12" controlId="validationCustomUsername">
          <InputGroup hasValidation>
            <Form.Control type="text" placeholder="Email" aria-describedby="inputGroupPrepend" required />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </InputGroup>
        </FormGroup>
      </Row>

      <FormGroup className="mb-3 checkbox">
        <Form.Check
          required
          label="I agree to the terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </FormGroup>
      <div className="text-align-center">
        <button onClick={() => setModalShow(true)} className="carouselBtn submitBtn" type="submit">
          Join the newsletter
        </button>
      </div>

      <SubmissionModal show={modalShow} onHide={() => setModalShow(false)} />
    </Form>
  );
};

export default NewsletterForm;
