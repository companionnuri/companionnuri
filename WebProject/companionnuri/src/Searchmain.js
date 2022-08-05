import Searchmap from "./Searchmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Searchmain() {
  const location = useLocation();
  const keyword = location.state.keyword;
  console.log(keyword)
  
  return (
    <div className="d-flex flex-column align-items-center">
      <Top op="true" keyword={keyword} />
      <Searchmap keyword={keyword} />
    </div>
  );
}

export default Searchmain;
