import React, { useEffect, useState } from "react";
import ParkKakaoMapScript from "./ParkKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Parkmap(props) {
    const [clicksearchValue, setclicksearchValue] = useState("");
    console.log(clicksearchValue);
    props.setClicksearch(clicksearchValue);
  return (
    <div className="kakaomap">
      <ParkKakaoMapScript setclicksearchValue={setclicksearchValue} />
    </div>
  );
}

export default Parkmap;
