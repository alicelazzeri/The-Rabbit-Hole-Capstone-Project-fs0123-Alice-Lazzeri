import { Col, Container, Row, Toast } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsFillBookmarkHeartFill, BsFillBagHeartFill } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import unavailableImage from "../assets/images/unavailable.png";
import { Link } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";
import { useState } from "react";

const SearchCard = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search.content?.data);
  const [showToast, setShowToast] = useState(false);
  const toggleShowToast = () => {
    setShowToast(!showToast);
  };

  const handleAddToFavourites = book => {
    dispatch(addToFavouritesAction(book));
    toggleShowToast();
  };

  return (
    <Container fluid>
      <Row className="cardsRow px-4">
        {search?.map(book => (
          <Col key={book.id} sm={6} md={4} lg={3} className="pb-2">
            <Card className="bookCard pb-4" style={{ height: "47rem" }}>
              <Card.Img
                className="cardImage"
                variant="top"
                width={200}
                height={400}
                src={book.imageLinks?.thumbnail || unavailableImage}
              />
              <Card.Body>
                <Card.Title className="bookTitle text-truncate">{book.title}</Card.Title>
                <Card.Text>
                  <p className="bookAuthor text-truncate">{book.authors}</p>
                  <p className="bookPrice">{book.publisher}</p>
                </Card.Text>
                <div className="d-flex flex-wrap justify-content-around align-items-center mt-5 gap-4">
                  <Link to={`/search-details/${book.id}`}>
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
                  <button onClick={() => handleAddToFavourites(book)} className="addToFavBtn">
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

export default SearchCard;
