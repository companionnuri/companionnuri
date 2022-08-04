import React, { useEffect, useState } from "react";
import SearchKakaoMapScript from "./SearchKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Searchmap(props) {
  console.log(props.keyword)
  const key = props.keyword
  return (
    <div className="kakaomap">
      <SearchKakaoMapScript keyword={key} />
    </div>
  );
}

export default Searchmap;
