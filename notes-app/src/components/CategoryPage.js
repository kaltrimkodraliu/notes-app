import React, { useState, useEffect } from "react";
import CategoryDisplay from "./CategoryDisplay";
import CreateCategoryButton from "./CreateCategoryButton";
import CreateNoteButton from "./CreateNoteButton";
import NoteForm from "./NoteForm";
import "./categoryPage.css";
import SearchInput from "./SearchInput";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedCategories = loadFromLocalStorage("categories");

    if (storedCategories) {
      setCategories(storedCategories);
      setLoading(false);
    } else {
      setCategories([]);
      setLoading(false);
    }
  }, []);

  const createCategory = (categoryName) => {
    const newCategory = {
      id: categories.length + 1,
      notes: [],
      name: categoryName,
    };

    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    saveToLocalStorage("categories", updatedCategories);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(parseInt(event.target.value, 10));
    setShowNoteForm(false);
    setNoteTitle("");
    setNoteDescription("");
    setCurrentNoteId(null);
  };

  const showNoteCreationForm = () => {
    setShowNoteForm(true);
    setNoteTitle("");
    setNoteDescription("");
    setCurrentNoteId(null);
  };

  const showNoteEditForm = (note) => {
    setShowNoteForm(true);
    setNoteTitle(note.title);
    setNoteDescription(note.content);
    setCurrentNoteId(note.id);
  };

  const loadFromLocalStorage = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  };

  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const saveNote = () => {
    if (!noteTitle || !noteDescription) {
      alert("Please fill in both fields");
      return;
    }

    const updatedCategories = categories.map((category) => {
      if (category.id === selectedCategoryId) {
        if (currentNoteId) {
          return {
            ...category,
            notes: category.notes.map((note) =>
              note.id === currentNoteId
                ? { ...note, title: noteTitle, content: noteDescription }
                : note
            ),
          };
        } else {
          const newNote = {
            id: Date.now(),
            title: noteTitle,
            content: noteDescription,
          };
          return {
            ...category,
            notes: [...category.notes, newNote],
          };
        }
      }
      return category;
    });

    setCategories(updatedCategories);
    saveToLocalStorage("categories", updatedCategories);
    setShowNoteForm(false);
    setNoteTitle("");
    setNoteDescription("");
    setCurrentNoteId(null);
  };

  const deleteNote = () => {
    if (!currentNoteId) {
      alert("No note selected for deletion");
      return;
    }

    const updatedCategories = categories.map((category) => {
      if (category.id === selectedCategoryId) {
        return {
          ...category,
          notes: category.notes.filter((note) => note.id !== currentNoteId),
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    saveToLocalStorage("categories", updatedCategories);
    setShowNoteForm(false);
    setNoteTitle("");
    setNoteDescription("");
    setCurrentNoteId(null);
  };

  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryId
  );

  const filteredNotes = selectedCategory
    ? selectedCategory.notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (loading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="d-flex">
      <div className="col-6 p-3  d-flex">
        <div className="d-grid section-container col-5 col-xl-4">
          <div className="col-12">
            {" "}
            <CreateCategoryButton onCreateCategory={createCategory} />
          </div>

          {categories.map((category) => (
            <div key={category.id} className="mt-2">
              <CategoryDisplay
                id={`category-${category.id}`}
                name={category.name}
                value={category.id}
                checked={selectedCategoryId === category.id}
                notes={category.notes.length}
                onChange={handleCategoryChange}
              />
            </div>
          ))}
        </div>
        <div className="col-7 col-xl-8 ps-3">
          {selectedCategory && (
            <div className="d-flex section-container px-3 col-12">
              <div className="col-12">
                <div className="mb-3 d-flex align-items-center w-100">
                  <div className="col-6 pe-2">
                    <CreateNoteButton onClick={showNoteCreationForm} />
                  </div>
                  <div className="col-6 ps-2">
                    <SearchInput
                      searchValue={searchTerm}
                      onSearchChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                {filteredNotes.length === 0 ? (
                  <p>No notes available</p>
                ) : (
                  <div>
                    {filteredNotes.map((note) => (
                      <div
                        className="note-container"
                        key={note.id}
                        onClick={() => showNoteEditForm(note)}
                      >
                        <h4>{note.title}</h4>
                        <p>{note.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-6 py-3 pe-3">
        {showNoteForm && (
          <div className="col-12 section-container">
            <NoteForm
              title={noteTitle}
              content={noteDescription}
              onTitleChange={(e) => setNoteTitle(e.target.value)}
              onContentChange={(e) => setNoteDescription(e.target.value)}
              onSaveClick={saveNote}
              onDeleteClick={deleteNote}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
