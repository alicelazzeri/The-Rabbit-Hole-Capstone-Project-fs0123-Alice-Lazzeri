import Table from "react-bootstrap/Table";
import { HiTrash } from "react-icons/hi2";

const FavTable = () => {
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
        <tr className="tableRow">
          <td className="text-center align-middle">
            <img
              className="favPic rounded-circle"
              src="https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141199085.jpg"
              alt="Book cover"
              width={80}
              height={80}
            />
          </td>
          <td className="text-center align-middle">Wuthering Heights</td>
          <td className="text-center align-middle">Emily Brontë</td>
          <td className="text-center align-middle">
            <button className="deleteBtn">
              <HiTrash className="mb-1" />
            </button>
          </td>
        </tr>
        <tr className="tableRow">
          <td className="text-center align-middle">
            <img
              className="favPic rounded-circle"
              src="https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141199085.jpg"
              alt="Book cover"
              width={80}
              height={80}
            />
          </td>
          <td className="text-center align-middle">Jacob</td>
          <td className="text-center align-middle">Thornton</td>
          <td className="text-center align-middle">
            <button className="deleteBtn">
              <HiTrash className="mb-1" />
            </button>
          </td>
        </tr>
        <tr className="tableRow">
          <td className="text-center align-middle">
            <img
              className="favPic rounded-circle"
              src="https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141199085.jpg"
              alt="Book cover"
              width={80}
              height={80}
            />
          </td>
          <td className="text-center align-middle">Jacob</td>
          <td className="text-center align-middle">Thornton</td>
          <td className="text-center align-middle">
            <button className="deleteBtn">
              <HiTrash className="mb-1" />
            </button>
          </td>
        </tr>
        <tr className="tableRow">
          <td className="text-center align-middle">
            <img
              className="favPic rounded-circle"
              src="https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141199085.jpg"
              alt="Book cover"
              width={80}
              height={80}
            />
          </td>
          <td className="text-center align-middle">Wuthering Heights</td>
          <td className="text-center align-middle">Emily Brontë</td>
          <td className="text-center align-middle">
            <button className="deleteBtn">
              <HiTrash className="mb-1" />
            </button>
          </td>
        </tr>
        <tr className="tableRow">
          <td className="text-center align-middle">
            <img
              className="favPic rounded-circle"
              src="https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141199085.jpg"
              alt="Book cover"
              width={80}
              height={80}
            />
          </td>
          <td className="text-center align-middle">Wuthering Heights</td>
          <td className="text-center align-middle">Emily Brontë</td>
          <td className="text-center align-middle">
            <button className="deleteBtn">
              <HiTrash className="mb-1" />
            </button>
          </td>
        </tr>
        <tr className="tableRow">
          <td className="text-center align-middle">
            <img
              className="favPic rounded-circle"
              src="https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141199085.jpg"
              alt="Book cover"
              width={80}
              height={80}
            />
          </td>
          <td className="text-center align-middle">Wuthering Heights</td>
          <td className="text-center align-middle">Emily Brontë</td>
          <td className="text-center align-middle">
            <button className="deleteBtn">
              <HiTrash className="mb-1" />
            </button>
          </td>
        </tr>
        <tr className="tableRow">
          <td className="text-center align-middle">
            <img
              className="favPic rounded-circle"
              src="https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141199085.jpg"
              alt="Book cover"
              width={80}
              height={80}
            />
          </td>
          <td className="text-center align-middle">Wuthering Heights</td>
          <td className="text-center align-middle">Emily Brontë</td>
          <td className="text-center align-middle">
            <button className="deleteBtn">
              <HiTrash className="mb-1" />
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FavTable;

//IoTrashBin

//TbTrashFilled
