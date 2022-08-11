import React, { useEffect, useState } from "react";
import CafeKakaoMapScript from "./CafeKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Cafemap(props) {
    const [clicksearchValue, setclicksearchValue] = useState("");
    console.log(clicksearchValue);
    props.setClicksearch(clicksearchValue);
  return (
    <div className="kakaomap">
      <CafeKakaoMapScript setclicksearchValue={setclicksearchValue} />
    </div>
  );
}

export default Cafemap;
