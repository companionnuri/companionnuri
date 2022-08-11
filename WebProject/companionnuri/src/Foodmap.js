import React, { useEffect, useState } from "react";
import FoodKakaoMapScript from "./FoodKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Foodmap(props) {
  const [clicksearchValue, setclicksearchValue] = useState("");
  console.log(clicksearchValue);
  props.setClicksearch(clicksearchValue);

  return (
    <div className="kakaomap">
      <FoodKakaoMapScript setclicksearchValue={setclicksearchValue} />
    </div>
  );
}

export default Foodmap;
