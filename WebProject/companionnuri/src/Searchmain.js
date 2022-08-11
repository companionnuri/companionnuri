import Searchmap from "./Searchmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Searchmain() {
  const location = useLocation();
  console.log(location);
  const mainkeyword = location.state.keyword;
  console.log(mainkeyword);
  const later = location.state.later;
  console.log(later)
  const inputValue = location.state.inputValue
  console.log(inputValue)

  // const { state } = useLocation();
  // console.log(state);

  return (
    <div className="d-flex flex-column align-items-center">
      <Top op="true" keyword={mainkeyword} />
      {inputValue === undefined ? (
        <Searchmap searchmapkeyword={mainkeyword} />
      ) : (
        <Searchmap searchmapinputvalue={inputValue} />
      )}
    </div>
  );
}

export default Searchmain;
