import { Card, Col, Container, Row, Toast } from "react-bootstrap";
import { BsFillBagHeartFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import unavailableImage from "../assets/images/unavailable.png";
import { Link } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";
import { useState } from "react";

const CarouselCard = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.home.content?.data);
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => {
    setShowToast(!showToast);
  };

  const handleAddToFavourites = book => {
    dispatch(addToFavouritesAction(book));
    toggleShowToast();
  };

  return (
    <Container fluid className="homeCardContainer">
      <Row className="cardsRow flex-nowrap">
        {books?.map(book => (
          <Col key={book.id} className="homeCard pb-2 px-5">
            <Card className="bookCard pb-4" style={{ width: "20rem", height: "47rem" }}>
              <Card.Img
                className="cardImage"
                variant="top"
                width={200}
                height={450}
                src={book.imageLinks?.thumbnail || unavailableImage}
              />
              <Card.Body className="cardBody">
                <Card.Title className="bookTitle text-truncate">{book.title}</Card.Title>
                <Card.Text>
                  <p className="bookAuthor text-truncate">{book.authors}</p>
                  <p className="bookPrice">{book.publisher}</p>
                </Card.Text>
                <div className="d-flex flex-wrap justify-content-around align-items-center mt-4">
                  <Link to={`/details/${book.id}`}>
                    <button className="detailsBtn">
                      Details
                      <HiPlusCircle className="ms-2 mb-1" />
                    </button>
                  </Link>
                  <Link
                    to={book.buyLink ? book.buyLink : book.previewLink}
                    target="_blank"
                    rel="noreferrer"
                    className="buyBtn"
                  >
                    Buy book
                    <BsFillBagHeartFill className="ms-2 mb-2" />
                  </Link>
                  <button onClick={() => handleAddToFavourites(book)} className="addToFavBtn mt-3">
                    Add to Favourites
                    <BsFillBookmarkHeartFill className="ms-2 mb-2" />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Toast
        show={showToast}
        onClose={toggleShowToast}
        className="position-fixed top-0 end-0 m-3"
        style={{ zIndex: 9999 }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    </Container>
  );
};

export default CarouselCard;
