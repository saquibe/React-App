import React from "react";
import Paper from "@mui/material/Paper";

function Header() {
  return (
    <Paper style={{ padding: "5px", display: "flex" }} square elevation={3}>
      <img
        style={{ width: "50px" }}
        src="https://www.excellisit.com/wp-content/uploads/2023/05/best-react-js-development-company-noida-india-adsvento-221704.png"
        alt=""
      />
      <h1 style={{ margin: 0, fontFamily: "cursive", fontWeight: "100" }}>
        React App
      </h1>
    </Paper>
  );
}

export default Header;
