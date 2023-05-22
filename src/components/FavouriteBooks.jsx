import { useSelector } from "react-redux";
import FavTable from "./FavTable";
import HomeButton from "./HomeButton";

const FavouritesBooks = () => {
  const favourites = useSelector(state => state.favourites.content?.data);
  return (
    <div className="favContainer">
      <h1 className="favTitle text-center text-sm-start ms-0 ms-sm-5">My Books</h1>
      {favourites && favourites.length > 0 ? (
        <div className="mt-4">
          <FavTable />
        </div>
      ) : (
        <div className="mt-5">
          <h1 className="noFavTitle mb-3">No favourite books have been added to the list yet. </h1>
          <p className="noFavBody mb-5">
            Go back to the homepage and search for your favourite books and add them to this section!
          </p>
          <HomeButton />
        </div>
      )}
    </div>
  );
};
export default FavouritesBooks;
