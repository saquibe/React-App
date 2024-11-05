import { Fab, Paper, TextField } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

function FormArea() {
  return (
    <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
      <form>
        <TextField label="Title" fullWidth autoComplete="off" />
        <TextField
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
