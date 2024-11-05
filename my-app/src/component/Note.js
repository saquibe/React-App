import { Paper } from "@mui/material";
import React from "react";

function Note() {
  return (
    <Paper
      style={{
        minWidth: "200px",
        minHeight: "100px",
        padding: "10px",
        margin: "20px",
        display: "inline-flex",
      }}
    >
      <div>
        <h1>Title</h1>
        <p>content</p>
      </div>
    </Paper>
  );
}

export default Note;
