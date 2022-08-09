import Searchmap from "./Searchmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Searchmain() {
  const location = useLocation();
  const mainkeyword = location.state.keyword;
  console.log(mainkeyword);
  
  return (
    <div className="d-flex flex-column align-items-center">
      <Top op="true" keyword={mainkeyword} />
      <Searchmap searchmapkeyword={mainkeyword} />
    </div>
  );
}

export default Searchmain;
