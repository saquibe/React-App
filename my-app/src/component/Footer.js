import React from "react";

function Footer() {
  return (
    <div>
      <p
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} Mohammad Saquib
      </p>
    </div>
  );
}

export default Footer;
