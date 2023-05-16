import { useState } from "react";
import { Dropdown, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getQueryBookFetch } from "../redux/actions";
import { BsSearchHeart } from "react-icons/bs";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("book");
  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (filter === "book") {
      dispatch(getQueryBookFetch("book", query));
    } else if (filter === "author") {
      dispatch(getQueryBookFetch("author", query));
    } else if (filter === "category") {
      dispatch(getQueryBookFetch("category", query));
    }
  };

  return (
    <div className="inputContainer">
      <InputGroup className="searchInput mb-3 mx-auto d-flex align-items-center">
        <Form.Control
          onSubmit={handleSubmit}
          aria-label="Text input with dropdown button"
          className="inputBar"
          type="text"
          placeholder={`Search ${filter}`}
          defaultValue={query}
          onChange={e => {
            setQuery(e.target.value);
            console.log(e.target.value);
          }}
        />

        <Dropdown>
          <Dropdown.Toggle className="searchBtn" title={filter} id="dropdown-basic">
            {filter}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="dropdownItem" onClick={() => setFilter("book")}>
              Book
            </Dropdown.Item>
            <Dropdown.Item className="dropdownItem" onClick={() => setFilter("author")}>
              Author
            </Dropdown.Item>
            <Dropdown.Item className="dropdownItem" onClick={() => setFilter("category")}>
              Category
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button className="searchButton" type="submit" onClick={handleSubmit}>
          Search
          <BsSearchHeart className="ms-2" />
        </button>
      </InputGroup>
    </div>
  );
};

export default SearchInput;
