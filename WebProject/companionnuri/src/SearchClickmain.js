import SearchClickmap from "./SearchClickmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Searchmain() {
  const location = useLocation();
  console.log(location);
  const mainkeyword = location.state;
  console.log(mainkeyword);

  return (
    <div className="d-flex flex-column align-items-center">
      <Top op="true" keyword1={mainkeyword} />
      <SearchClickmap searchmapkeyword={mainkeyword} />
    </div>
  );
}

export default Searchmain;
