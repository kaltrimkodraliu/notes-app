import "./noteForm.css";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";

const NoteForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="inputContainer"
          type="text"
          id="title"
          value={props.title}
          onChange={props.onTitleChange}
          placeholder="Add a title"
          required
        />
      </div>
      <div className="mt-3">
        <textarea
          className="textAreaContainer"
          id="content"
          value={props.content}
          onChange={props.onContentChange}
          placeholder="Write your note here..."
          required
          rows={10}
        />
      </div>
      <div className="d-flex justify-content-between">
        <DeleteButton onClick={props.onDeleteClick} />
        <SaveButton onClick={props.onSaveClick} />
      </div>
    </form>
  );
};

export default NoteForm;
