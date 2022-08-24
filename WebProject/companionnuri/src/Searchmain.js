import Searchmap from "./Searchmap";
import Top from "./Top";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";

function Searchmain() {
  const location = useLocation();
  // console.log(location);
  const mainkeyword = location.state.keyword;
  // console.log(mainkeyword);
  const later = location.state.later;
  // console.log(later)
  const inputValue = location.state.inputValue;
  // console.log(inputValue)

  const [clicksearch, setClicksearch] = useState("");
  // console.log(clicksearch)

  return (
    <div className="d-flex flex-column align-items-center">
      {inputValue === undefined ? (
        <div>
          <Top
            op="true"
            keyword={mainkeyword}
            later={later}
            kakaoclickresult={clicksearch}
            detailop="true"
          />
          <Searchmap
            searchmapkeyword={mainkeyword}
            setClicksearch={setClicksearch}
          />
        </div>
      ) : (
        <div>
          <Top
            op="true"
            keyword={mainkeyword}
            later={later}
            kakaoclickresult={clicksearch}
            detailop="true"
          />
          <Searchmap
            searchmapinputvalue={inputValue}
            setClicksearch={setClicksearch}
          />
        </div>
      )}
    </div>
  );
}

export default Searchmain;
