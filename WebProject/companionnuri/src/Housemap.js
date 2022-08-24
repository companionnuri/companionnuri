import React, { useState } from "react";
import HouseKakaoMapScript from "./HouseKakaoMapScript";

function Housemap(props) {
  const [clicksearchValue, setclicksearchValue] = useState("");
  // console.log(clicksearchValue);
  props.setClicksearch(clicksearchValue);
  return (
    <div className="kakaomap">
      <HouseKakaoMapScript setclicksearchValue={setclicksearchValue} />
    </div>
  );
}

export default Housemap;
