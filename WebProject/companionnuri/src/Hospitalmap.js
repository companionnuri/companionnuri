import React, { useState } from "react";
import HospitalKakaoMapScript from "./HospitalKakaoMapScript";

function Hospitalmap(props) {
  const [clicksearchValue, setclicksearchValue] = useState("");
  // console.log(clicksearchValue);
  props.setClicksearch(clicksearchValue);
  return (
    <div className="kakaomap">
      <HospitalKakaoMapScript setclicksearchValue={setclicksearchValue} />
    </div>
  );
}

export default Hospitalmap;
