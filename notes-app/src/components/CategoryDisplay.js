import { FaFolder, FaChevronDown, FaChevronRight } from "react-icons/fa";
import "./categoryDisplay.css";

const CategoryDisplay = (props) => {
  return (
    <label className="category-display-wrapper w-100 h-100">
      <input
        type="radio"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      <span className="d-flex align-items-center justify-content-between w-100 h-100 px-3">
        <FaFolder />
        {props.name} ({props.notes})
        {props.checked ? <FaChevronRight /> : <FaChevronDown />}
      </span>
    </label>
  );
};

export default CategoryDisplay;
