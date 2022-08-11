import React, { useEffect, useState } from "react";
import HospitalKakaoMapScript from "./HospitalKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Hospitalmap(props) {
    const [clicksearchValue, setclicksearchValue] = useState("");
    console.log(clicksearchValue);
    props.setClicksearch(clicksearchValue);
  return (
    <div className="kakaomap">
      <HospitalKakaoMapScript setclicksearchValue={setclicksearchValue} />
    </div>
  );
}

export default Hospitalmap;
