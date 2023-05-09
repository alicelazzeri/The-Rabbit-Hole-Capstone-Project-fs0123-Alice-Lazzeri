import Table from "react-bootstrap/Table";

const FavTable = () => {
  return (
    <Table striped bordered hover>
      <thead className="tableHead">
        <tr>
          <th></th>
          <th>Book</th>
          <th>Author</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr className="tableRow">
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr className="tableRow">
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr className="tableRow">
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FavTable;
