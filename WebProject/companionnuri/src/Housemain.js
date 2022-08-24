import Housemap from "./Housemap";
import Top from "./Top";
import React, { useState } from "react";

function Housemain() {
  const [clicksearch, setClicksearch] = useState("");
  // console.log(clicksearch);
  return (
    <div className="d-flex flex-column align-items-center">
      <Top kakaoclickresult={clicksearch} detailop="true" />
      <Housemap setClicksearch={setClicksearch} />
    </div>
  );
}

export default Housemain;
