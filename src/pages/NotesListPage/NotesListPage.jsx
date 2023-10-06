import { useState, useEffect } from "react";
import * as notesAPI from "../../utilities/notes-api";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import Note from "../../components/Note/Note";
import "./NotesListPage.css";

export default function NotesListPage({user}) {

  const [notes, setNotes] = useState([]);

  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, [])



  const notesList = notes.map((note, idx) => (
    <Note note={note} handleDelete = {handleDelete} setNotes={setNotes} key={idx}/>
  ));

  async function handleAdd(newNoteData) {
    const newNote = await notesAPI.addNote(newNoteData);
    setNotes([...notes, newNote]);
  }

  async function handleDelete(noteId) {
    const noteToDelete = await notesAPI.deleteNote(noteId);
    setNotes(notes.filter(note => note._id !== noteId));
  }

  
  return (
    <div className="NotesListPage">
      <NewNoteForm user={user} handleAdd={handleAdd}/>
      <h1>Notes</h1>
        {!notes.length ? <p>No Notes Yet</p> :  notesList}
    </div>
  );
}