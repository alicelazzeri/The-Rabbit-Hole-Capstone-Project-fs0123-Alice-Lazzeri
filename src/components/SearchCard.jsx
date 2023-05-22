import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsFillBookmarkHeartFill, BsFillBagHeartFill } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import unavailableImage from "../assets/images/unavailable.png";
import { Link } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";

const SearchCard = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search.content?.data);

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
                height={450}
                src={book.imageLinks?.thumbnail || unavailableImage}
              />
              <Card.Body>
                <Card.Title className="bookTitle text-truncate">{book.title}</Card.Title>
                <Card.Text>
                  <p className="bookAuthor text-truncate">{book.authors}</p>
                  <p className="bookPrice">{book.publisher}</p>
                </Card.Text>
                <div className="d-flex flex-wrap justify-content-around align-items-center mt-4">
                  <Link to={`/search-details/${book.id}`}>
                    <button className="detailsBtn mb-md-3 mb-lg-0">
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

export default SearchCard;
