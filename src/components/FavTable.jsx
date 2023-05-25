import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { HiTrash } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavouritesAction } from "../redux/actions";
import unavailableImage from "../assets/images/unavailable.png";
import RatingModal from "./RatingModal";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FavTable = () => {
  const [ratings, setRatings] = useState({});
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites.favourites.content);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRating = book => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleSaveRating = rating => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [selectedBook.id]: rating,
    }));
    setShowModal(false);
  };

  const renderStars = value => {
    const filledStars = "★".repeat(value);
    const emptyStars = "☆".repeat(5 - value);
    return (
      <span>
        {filledStars}
        {emptyStars}
      </span>
    );
  };

  if (!favourites) {
    return null;
  }

  return (
    <>
      <Table>
        <thead className="tableHead">
          <tr>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Cover
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Book
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Author
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Rating
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}></th>
          </tr>
        </thead>
        <tbody>
          {favourites.map((book, i) => (
            <tr key={i} id={book.id} className="tableRow">
              <td className="text-center align-middle">
                <Link to={`/details/${book.id}`}>
                  <img
                    className="favPic rounded-circle"
                    src={book.imageLinks?.thumbnail || unavailableImage}
                    alt="Book cover"
                    width={80}
                    height={80}
                  />
                </Link>
              </td>
              <td className="text-center align-middle">{book.title}</td>
              <td className="text-center align-middle">{book.authors}</td>
              <td className="text-center align-middle">{ratings[book.id] && renderStars(ratings[book.id])}</td>
              <td className="text-center align-middle">
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="ratingBtn"
                    onClick={() => {
                      handleRating(book);
                    }}
                  >
                    <BsBookmarkStarFill className="mb-1" />
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      dispatch(deleteFavouritesAction(i));
                    }}
                  >
                    <HiTrash className="mb-1" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <RatingModal show={showModal} handleClose={() => setShowModal(false)} handleSave={handleSaveRating} />
    </>
  );
};

export default FavTable;
