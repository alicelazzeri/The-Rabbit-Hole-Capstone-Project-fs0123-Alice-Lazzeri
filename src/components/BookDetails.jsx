import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeButton from "./HomeButton";
import unavailableImage from "../assets/images/unavailable.png";
import { BsFillBagHeartFill, BsFillBookmarkHeartFill, BsHeartArrow } from "react-icons/bs";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector(state => state.home.content?.data);
  const book = books.find(book => book.id === id);

  if (!book) {
    return (
      <div>
        <p>Book not found!</p>
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
              className="bookCover"
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
                {`${book.saleInfo?.retailPrice}€` || "No price available for this book"}
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
                <Link to={book.saleInfo?.buyLink} target="_blank">
                  <button className="buyBtn mt-3">
                    Buy book
                    <BsFillBagHeartFill className="ms-2 mb-2" />
                  </button>
                </Link>

                <Link to="/favourites">
                  <button className="addToFavBtn mt-3">
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

export default BookDetails;
