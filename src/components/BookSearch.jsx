import { BsFillSearchHeartFill } from "react-icons/bs";
import SearchInput from "./SearchInput";
import SearchCard from "./SearchCard";

const BookSearch = () => {
  return (
    <>
      <div className="searchContainer">
        <h1 className="searchTitle">
          <BsFillSearchHeartFill className="me-3" />
          Search Page
        </h1>
        <p className="bodySearch">Make your own search by book, author or category.</p>
      </div>
      <SearchInput />
      <h4 className="resultsTitle">Your search for "emily bronte" returned the following results:</h4>
      <SearchCard />
    </>
  );
};

export default BookSearch;
