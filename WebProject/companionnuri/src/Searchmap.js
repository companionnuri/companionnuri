import React, { useEffect, useState } from "react";
import SearchKakaoMapScript from "./SearchKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Searchmap(props) {
  console.log(props.searchmapkeyword);
  const kakaopropskeyword = props.keyword
  return (
    <div className="kakaomap">
      <SearchKakaoMapScript kakaovalue={kakaopropskeyword} />
    </div>
  );
}

export default Searchmap;
