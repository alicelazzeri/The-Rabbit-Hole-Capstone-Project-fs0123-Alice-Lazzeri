import FavTable from "./FavTable";

const FavouritesBooks = () => {
  return (
    <div className="favContainer">
      <h1 className="favTitle text-center text-sm-start ms-0 ms-sm-5">My Books</h1>
      <div className="mt-4">
        <FavTable />
      </div>
    </div>
  );
};

export default FavouritesBooks;
