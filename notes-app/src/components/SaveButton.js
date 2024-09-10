import "./saveButton.css";
import { FaCheck } from "react-icons/fa";

const SaveButton = (props) => {
  return (
    <div className="d-flex">
      <button
        className="btn btn-success saveButtonContainer"
        onClick={props.onClick}
      >
        {" "}
        Save Changes
      </button>
      <button
        className="btn btn-success saveButtonContent text-white"
        onClick={props.onClick}
      >
        <FaCheck style={{ color: "white", fontSize: "14px" }} />
      </button>
    </div>
  );
};

export default SaveButton;
