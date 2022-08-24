import React, { useState } from "react";
import ParkKakaoMapScript from "./ParkKakaoMapScript";

function Parkmap(props) {
  const [clicksearchValue, setclicksearchValue] = useState("");
  // console.log(clicksearchValue);
  props.setClicksearch(clicksearchValue);
  return (
    <div className="kakaomap">
      <ParkKakaoMapScript setclicksearchValue={setclicksearchValue} />
    </div>
  );
}

export default Parkmap;
