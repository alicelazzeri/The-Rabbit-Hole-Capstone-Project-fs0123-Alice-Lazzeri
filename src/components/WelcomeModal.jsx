import Modal from "react-bootstrap/Modal";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const WelcomeModal = props => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter welcomeModal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="welcomeModalTitle">
          <img src={logo} alt="Logo pic" width={80} height={80} className="rounded-circle me-3" />
          The Rabbit Hole
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="welcomeModalSubtitle">
          Welcome back to <span className="welcomeModalSubtitleSpan">The Rabbit Hole</span>!
        </h4>
        <p className="welcomeModalBody">We're so glad to see you. Thanks for joining us again! ♥️</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-center align-items-center gap-5 welcomeBtnContainer">
          <Link to="/">
            <button className="modalHomeBtn" onClick={props.onHide}>
              Homepage
            </button>
          </Link>
          <button className="welcomeModalBtn" onClick={props.onHide}>
            Close
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
