import { useState } from "react";
import "./NewNoteForm.css"

export default function NewNoteForm({user, handleAdd}) {
  const [newNote, setNewNote] = useState({
    text: '',
  });
  function handleChange(evt) {
    setNewNote({ ...newNote, [evt.target.name]: evt.target.value });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const newNoteData = {...newNote};
    newNoteData.user = user;
    handleAdd(newNoteData);
    setNewNote({text: ''})
  }
  return (
    <div className="NewNoteForm">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <textarea name="text" rows="4" cols="50" value={newNote.text} onChange={handleChange} required></textarea>          
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}