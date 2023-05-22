import { Card, Col, Container, Row } from "react-bootstrap";
import { BsFillBagHeartFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import unavailableImage from "../assets/images/unavailable.png";
import { Link } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";

const HomeCard = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.home.content?.data);
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
                  <Link to={book.buyLink} target="_blank" rel="noreferrer" className="buyBtn">
                    Buy book
                    <BsFillBagHeartFill className="ms-2 mb-2" />
                  </Link>

                  <Link to="/favourites">
                    <button
                      onClick={() => {
                        dispatch(addToFavouritesAction);
                      }}
                      className="addToFavBtn mt-3"
                    >
                      Add to Favourites
                      <BsFillBookmarkHeartFill className="ms-2 mb-2" />
                    </button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeCard;
