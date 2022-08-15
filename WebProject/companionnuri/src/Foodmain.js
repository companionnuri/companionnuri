import Foodmap from "./Foodmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Foodmain() {
  const [clicksearch, setClicksearch] = useState("");
  console.log(clicksearch);

  return (
    <div className="d-flex flex-column align-items-center">
      <Top kakaoclickresult={clicksearch} detailop="true" />
      <Foodmap setClicksearch={setClicksearch} />
    </div>
  );
}

export default Foodmain;