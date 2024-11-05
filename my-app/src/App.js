import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import FormArea from "./component/FormArea";

function App() {
  return (
    <div>
      <Header />
      <FormArea />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
