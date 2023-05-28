import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Toast } from "react-bootstrap";
import { BsFillBagHeartFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";
import logo from "../assets/images/logo.png";
import unavailableImage from "../assets/images/unavailable.png";

const HomeCard = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.home.content?.data);
  const [toasts, setToasts] = useState([]);

  const handleAddToFavourites = book => {
    dispatch(addToFavouritesAction(book));
    setToasts(prevToasts => [book.title, ...prevToasts]);
  };

  const handleRemoveToast = index => {
    setToasts(prevToasts => {
      const updatedToasts = [...prevToasts];
      updatedToasts.splice(index, 1);
      return updatedToasts;
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToasts(prevToasts => {
        if (prevToasts.length > 0) {
          const updatedToasts = [...prevToasts];
          updatedToasts.pop();
          return updatedToasts;
        }
        return prevToasts;
      });
    }, 5000);
    return () => clearTimeout(timeout);
  }, [toasts]);

  return (
    <Container fluid className="homeCardContainer">
      <Row className="flex-nowrap">
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
      <div className="toastContainer">
        {toasts.map((title, index) => (
          <Toast
            key={index}
            show
            onClose={() => handleRemoveToast(index)}
            className="favouritesToast position-fixed top-0 end-0 m-3"
            style={{ zIndex: 9999 - index }}
          >
            <Toast.Header>
              <img src={logo} className="rounded me-2" width={50} height={50} alt="Logo pic" />
              <strong className="toastTitle me-auto">The Rabbit Hole</strong>
            </Toast.Header>
            <Toast.Body className="toastBody">
              Terrific! You just added{" "}
              <span className="toastSpan">
                <em>{title}</em>
              </span>{" "}
              to your favourite books! 📚
            </Toast.Body>
            <Link to="/favourites">
              <button className="addToFavBtn my-4">
                Check your Favourites
                <BsFillBookmarkHeartFill className="ms-2 mb-2" />
              </button>
            </Link>
          </Toast>
        ))}
      </div>
    </Container>
  );
};

export default HomeCard;
