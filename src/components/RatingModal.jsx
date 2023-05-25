import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "../assets/images/logo.png";
import { BsBookmarkStarFill } from "react-icons/bs";

const RatingModal = ({ show, handleClose, handleSave }) => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = value => {
    setRating(value);
  };

  const renderStar = (value, filledColor, emptyColor) => {
    return (
      <span
        className="star"
        style={{
          color: value <= rating ? filledColor : emptyColor,
        }}
        onClick={() => handleRatingClick(value)}
      >
        &#9733;
      </span>
    );
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="p-4" closeButton>
        <Modal.Title className="modalHeader">
          <img className="modalLogo" src={logo} alt="Logo pic" width={70} height={70} />
          The Rabbit Hole
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="modalSubTitle">
          <BsBookmarkStarFill className="modalIcon" />
          Rate the Book
        </h4>
        <div className="rating-container">
          {renderStar(1, "gold", "lightgray")}
          {renderStar(2, "gold", "lightgray")}
          {renderStar(3, "gold", "lightgray")}
          {renderStar(4, "gold", "lightgray")}
          {renderStar(5, "gold", "lightgray")}
        </div>
      </Modal.Body>
      <Modal.Footer className="py-4">
        <Button className="modalBtn saveBtn" onClick={() => handleSave(rating)}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RatingModal;
