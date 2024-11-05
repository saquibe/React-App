import React, { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import FormArea from "./component/FormArea";

function App() {
  const [notes, setNotes] = useState([]);

  console.log(notes);

  function addNote(note) {
    setNotes((preNotes) => {
      return [...preNotes, note];
    });
  }
  function delNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <FormArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          id={index}
          delNote={delNote}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
