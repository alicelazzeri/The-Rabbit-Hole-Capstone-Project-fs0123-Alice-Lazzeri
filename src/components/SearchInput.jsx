import { useState } from "react";
import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("book");
  const [query, setQuery] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // if (filter === "book") {
    //   dispatch(bookQueryFetch("book", query));
    // } else if (filter === "author") {
    //   dispatch(bookQueryFetch("author", query));
    // } else if (filter === "category") {
    //   dispatch(bookQueryFetch("category", query));
    // }
    console.log("submit");
    navigate("/jobs");
  };

  return (
    <div className="inputContainer">
      <InputGroup className="searchInput mb-3 mx-auto">
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

        <DropdownButton className="searchBtn" title={filter} id="input-group-dropdown-2" align="end">
          <Dropdown.Item className="dropdownItem" onClick={() => setFilter("book")}>
            Book
          </Dropdown.Item>
          <Dropdown.Item className="dropdownItem" onClick={() => setFilter("author")}>
            Author
          </Dropdown.Item>
          <Dropdown.Item className="dropdownItem" onClick={() => setFilter("category")}>
            Category
          </Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </div>
  );
};

export default SearchInput;
