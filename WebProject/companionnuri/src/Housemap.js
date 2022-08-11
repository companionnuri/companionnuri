import React, { useEffect, useState } from "react";
import HouseKakaoMapScript from "./HouseKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Housemap(props) {
  const [clicksearchValue, setclicksearchValue] = useState("");
  console.log(clicksearchValue);
  props.setClicksearch(clicksearchValue);
  return (
    <div className="kakaomap">
      <HouseKakaoMapScript setclicksearchValue={setclicksearchValue} />
    </div>
  );
}

export default Housemap;
