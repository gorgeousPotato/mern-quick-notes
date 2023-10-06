import "./Note.css";
import * as notesAPI from "../../utilities/notes-api";
import { useState } from "react";
import EditNoteForm from "../EditNoteForm/EditNoteForm"


export default function Note({note, handleDelete, handleEditClick, setNotes}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleDelete(note._id);
  }
  
  function handleEditClick() {
    setIsEditing(true)
  }

  async function handleUpdate(editedNote) {
    const updatedNotes = await notesAPI.update(note._id, editedNote);
    setNotes(updatedNotes);
    setIsEditing(false);
  }

  return (
    <div className="Note">
      <div className="note-item">
        <p>{note.text}</p>
        <p>{new Date(note.updatedAt).toLocaleDateString()}</p>
        <button type="submit" onClick={handleEditClick}>Edit</button>
        <form onSubmit={handleSubmit}><button type="submit">Delete</button></form>
      </div>
      {isEditing && (<EditNoteForm note={note} setNotes={setNotes} handleUpdate={handleUpdate}/>)}
    </div>
  );
  
} 