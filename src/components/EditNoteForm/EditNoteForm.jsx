import "./EditNoteForm.css"
import * as notesAPI from "../../utilities/notes-api"
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditNoteForm({note, handleUpdate}) {
  const [editedNote, setEditedNote] = useState(note);
 
  function handleChange(evt) {
    setEditedNote({...editedNote, text: evt.target.value});
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdate(editedNote);
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <textarea required value={editedNote.text} name="text" onChange={handleChange}></textarea>          
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}