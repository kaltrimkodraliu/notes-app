import "./createNoteButton.css";

const CreateNoteButton = (props) => {
  return (
    <div className="d-flex w-100">
      <button
        className="btn btn-success buttonNoteContainer"
        onClick={props.onClick}
      >
        {" "}
        Create Note
      </button>
      <button
        className="btn btn-success buttonNoteContent"
        onClick={props.onClick}
      >
        +
      </button>
    </div>
  );
};

export default CreateNoteButton;
