import React, { useState, useEffect } from "react";
import Menubar from "./Menubar";

const hd_burger_btn = {
  border: "none",
  backgroundColor: "transparent",
  fontSize: "34px",
  color: "#fcf6f5",
  padding: 0,
  paddingLeft: "30px",
};

function Navbar() {
  const [value, setValue] = useState(false);

  const buttonClick = () => {
    setValue(!value);
  };

  return (
    <nav className="col-3">
      {value ? (
        <button onClick={buttonClick} style={hd_burger_btn}>
          <i class="fa-solid fa-x"></i>
        </button>
      ) : (
        <button onClick={buttonClick} style={hd_burger_btn}>
          <i class="fa-solid fa-bars"></i>
        </button>
      )}
      <div>{value ? <Menubar /> : null}</div>
    </nav>
  );
}

export default Navbar;
