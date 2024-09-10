import "./searchInput.css";

const SearchInput = (props) => {
  return (
    <div>
      <input
        className="bg-input"
        type="text"
        id="title"
        value={props.searchValue}
        onChange={props.onSearchChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
