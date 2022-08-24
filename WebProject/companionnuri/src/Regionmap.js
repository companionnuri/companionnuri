import React, { useState } from "react";
import RegionKakaoMapScript from "./RegionKakaoMapScript";

function Regionmap(props) {
  let regionItem = props.item;
  // console.log(regionItem);

  const [clicksearchValue, setclicksearchValue] = useState("");
  // console.log(clicksearchValue);
  props.setClicksearch(clicksearchValue);

  return (
    <div className="kakaomap">
      <RegionKakaoMapScript
        kakaoRegion={regionItem}
        setclicksearchValue={setclicksearchValue}
      />
    </div>
  );
}

export default Regionmap;
