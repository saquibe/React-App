import { Fab, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function FormArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  console.log(note);
  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  }
  return (
    <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
      <form>
        <TextField
          onChange={changeHandler}
          name="title"
          value={note.title}
          label="Title"
          fullWidth
          autoComplete="off"
        />
        <TextField
          onChange={changeHandler}
          name="content"
          value={note.content}
          style={{ marginTop: "10px" }}
          label="Content"
          multiline
          rows={4}
          fullWidth
          autoComplete="off"
        />
        <Fab style={{ marginTop: "20px" }}>
          <AddIcon />
        </Fab>
      </form>
    </Paper>
  );
}

export default FormArea;
