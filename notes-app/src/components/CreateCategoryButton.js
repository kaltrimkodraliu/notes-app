import React, { useState } from "react";
import "./createCategoryButton.css";

const CreateCategoryButton = (props) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const handleCancelClick = () => {
    setIsCreating(false);
    setNewCategoryName("");
  };

  const handleSaveClick = () => {
    if (newCategoryName.trim()) {
      props.onCreateCategory(newCategoryName); // Kalon emrin e kategorisë
      setIsCreating(false);
      setNewCategoryName("");
    } else {
      alert("Please enter a category name.");
    }
  };

  return (
    <div className="d-flex">
      {isCreating ? (
        <div className="d-flex align-items-center input-container gap-3 w-100">
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Add a title..."
            className="form-control category-input"
          />
          <button
            className="btn btn-success save-btn tick-button"
            onClick={handleSaveClick}
          >
            ✓
          </button>
          <button
            className="btn btn-danger cancel-btn x-button"
            onClick={handleCancelClick}
          >
            ✕
          </button>
        </div>
      ) : (
        <div className="d-flex w-100">
          <button
            className="btn btn-success buttonContainer"
            onClick={handleCreateClick}
          >
            Create Category
          </button>
          <button
            className="btn btn-success buttonContent"
            onClick={handleCreateClick}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateCategoryButton;
