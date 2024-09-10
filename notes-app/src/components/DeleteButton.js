import "./deleteButton.css";
import { FaTrash } from "react-icons/fa";

const DeleteButton = (props) => {
  return (
    <div className="d-flex">
      <button
        className="btn btn-danger deleteButtonContainer"
        onClick={props.onClick}
      >
        {" "}
        Delete Note
      </button>
      <button
        className="btn btn-danger deleteButtonContent text-white"
        onClick={props.onClick}
      >
        <FaTrash style={{ color: "white", fontSize: "14px" }} />
      </button>
    </div>
  );
};

export default DeleteButton;
