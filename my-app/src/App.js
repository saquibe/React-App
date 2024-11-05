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
  return (
    <div>
      <Header />
      <FormArea addNote={addNote} />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
