import Hospitalmap from "./Hospitalmap";
import Top from "./Top";
import React, { useState } from "react";

function Hospitalmain() {
  const [clicksearch, setClicksearch] = useState("");
  // console.log(clicksearch);
  return (
    <div className="d-flex flex-column align-items-center">
      <Top kakaoclickresult={clicksearch} detailop="true" />
      <Hospitalmap setClicksearch={setClicksearch} />
    </div>
  );
}

export default Hospitalmain;
