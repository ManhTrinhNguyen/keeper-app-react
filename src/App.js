import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])
  function addNote(newNote) {
    setNotes(prevNote => {
      return [...prevNote, newNote]
    })
  }
  function deleteNote(id) {
    setNotes(prevNote => {
     return prevNote.filter((note, index) => {
        return id !== index
      })
    })  
  }
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote}/>
      {notes.map((note, index) => {
        return <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content} 
        onDelete={deleteNote}
         />
      })}
      <Footer />
    </div>
  );
}

export default App;
