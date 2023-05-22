import Table from "react-bootstrap/Table";
import { HiTrash } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavouritesAction } from "../redux/actions";
import unavailableImage from "../assets/images/unavailable.png";

const FavTable = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites.content?.data);
  console.log(favourites);

  if (!favourites) {
    return null;
  }

  return (
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
          <th className="text-center" style={{ verticalAlign: "middle" }}></th>
        </tr>
      </thead>
      <tbody>
        {favourites.map((book, i) => (
          <tr key={i} id={book.id} className="tableRow">
            <td className="text-center align-middle">
              <img
                className="favPic rounded-circle"
                src={book.thumbnail || unavailableImage}
                alt="Book cover"
                width={80}
                height={80}
              />
            </td>
            <td className="text-center align-middle">{book.title}</td>
            <td className="text-center align-middle">{book.authors}</td>
            <td className="text-center align-middle">
              <button
                className="deleteBtn"
                onClick={() => {
                  dispatch(deleteFavouritesAction);
                }}
              >
                <HiTrash className="mb-1" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FavTable;
