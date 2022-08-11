import React, { useEffect, useState } from "react";
import SearchKakaoMapScript from "./SearchKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Searchmap(props) {
  console.log(props.searchmapkeyword);
  console.log(props.searchmapinputvalue);
  const [clicksearchValue, setclicksearchValue] = useState("");
  console.log(clicksearchValue)
  props.setClicksearch(clicksearchValue);

  return (
    <div className="kakaomap">
      {props.searchmapinputvalue === undefined ? (
        <SearchKakaoMapScript
          kakaovalue={props.searchmapkeyword}
          setclicksearchValue={setclicksearchValue}
        />
      ) : (
        <SearchKakaoMapScript kakaoinputvalue={props.searchmapinputvalue} />
      )}
    </div>
  );
}

export default Searchmap;
