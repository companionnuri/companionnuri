import React, { useState } from "react";
import CafeKakaoMapScript from "./CafeKakaoMapScript";

function Cafemap(props) {
  const [clicksearchValue, setclicksearchValue] = useState("");
  // console.log(clicksearchValue);
  props.setClicksearch(clicksearchValue);
  return (
    <div className="kakaomap">
      <CafeKakaoMapScript setclicksearchValue={setclicksearchValue} />
    </div>
  );
}

export default Cafemap;
