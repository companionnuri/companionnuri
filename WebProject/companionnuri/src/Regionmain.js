import Regionmap from "./Regionmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Regionmain() {
  const { state } = useLocation();
  console.log(state.data);
  let regionValue = state.data;

  const [clicksearch, setClicksearch] = useState("");
  console.log(clicksearch);

  return (
    <div className="d-flex flex-column align-items-center">
      <Top kakaoclickresult={clicksearch} detailop="true" />
      <Regionmap item={regionValue} setClicksearch={setClicksearch} />
    </div>
  );
}

export default Regionmain;
