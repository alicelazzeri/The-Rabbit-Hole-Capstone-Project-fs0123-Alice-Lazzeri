import { Col, Container, Row, Toast } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsFillBookmarkHeartFill, BsFillBagHeartFill } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import unavailableImage from "../assets/images/unavailable.png";
import { Link } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const SearchCard = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search.content?.data);
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

export default SearchCard;
