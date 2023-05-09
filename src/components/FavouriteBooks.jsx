import FavTable from "./FavTable";

const FavouritesBooks = () => {
  return (
    <>
      <div className="favContainer">
        <h1 className="favTitle text-center text-sm-start ms-sm-5">My Books</h1>
        <div>
          <FavTable />
        </div>
      </div>
    </>
  );
};

export default FavouritesBooks;
