import React, { useEffect, useState } from "react";
import SearchKakaoMapScript from "./SearchKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Searchmap(props) {
  console.log(props.searchmapkeyword);
  // console.log(props.later)
  console.log(props.searchmapinputvalue);
  return (
    <div className="kakaomap">
      {props.searchmapinputvalue === undefined ? (
        <SearchKakaoMapScript kakaovalue={props.searchmapkeyword} />
      ) : (
        <SearchKakaoMapScript kakaoinputvalue={props.searchmapinputvalue} />
      )}
    </div>
  );
}

export default Searchmap;
