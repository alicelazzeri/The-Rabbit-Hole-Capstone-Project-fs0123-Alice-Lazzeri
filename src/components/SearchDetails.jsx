import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeButton from "./HomeButton";
import unavailableImage from "../assets/images/unavailable.png";
import { BsFillBagHeartFill, BsFillBookmarkHeartFill, BsHeartArrow } from "react-icons/bs";
import { addToFavouritesAction } from "../redux/actions";

const SearchDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const books = useSelector(state => state.search.content?.data);
  const book = books.find(book => book.id === id);

  if (!book) {
    return (
      <div className="notFoundCnt">
        <h1 className="issueTitle my-5">Book not found!</h1>
        <p className="issueBody">
          We're sorry, but the book you were looking for doesn't seem to exist. Try searching for another book or go
          back to the homepage.
        </p>
        <HomeButton />
      </div>
    );
  }

  return (
    <div className="detailsContainer">
      <Card className="detailsCard">
        <Card.Body>
          <div className="detailsHero d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
            <img
              className="bookCover mb-5"
              src={book.imageLinks?.thumbnail || unavailableImage}
              alt="Book cover"
              width={400}
              height={620}
            />
            <div className="d-flex flex-column text-start ms-lg-5 mt-5 mt-lg-0">
              <Card.Title className="detailsTitle text-center text-lg-start">{book.title}</Card.Title>

              <Card.Text className="detailsBody">
                <p className="detailsAuthor text-center text-lg-start">
                  {book.authors} &#8226; {new Date(book.publishedDate).getFullYear()}
                </p>
              </Card.Text>

              <p className="detailsPublisher text-center text-lg-start">{book.publisher}</p>
              <p className="detailsDescription text-center text-lg-start">
                {book.retailPrice
                  ? `${book.retailPrice?.amount ? book.retailPrice.amount : book.retailPrice}€`
                  : "No price available for this book"}
              </p>
              <p className="detailsDescription text-center text-lg-start">
                {book.description || "No description available for this book"}
              </p>
              <div className="buttonsContainer d-flex justify-content-center justify-content-lg-start align-items-center gap-4 flex-wrap">
                <Link to="/">
                  <button className="goBackBtn mt-3">
                    Go back
                    <BsHeartArrow className="ms-2 mb-1" />
                  </button>
                </Link>
                <Link to={book.buyLink} target="_blank" rel="noreferrer" className="buyBtn mt-3">
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
                    <BsFillBookmarkHeartFill className="ms-2 mb-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchDetails;
