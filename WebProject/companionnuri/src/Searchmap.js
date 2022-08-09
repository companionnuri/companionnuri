import React, { useEffect, useState } from "react";
import SearchKakaoMapScript from "./SearchKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Searchmap(props) {
  console.log(props.keyword)
  const keyword = props.keyword
  return (
    <div className="kakaomap">
      <SearchKakaoMapScript keyword={keyword} />
    </div>
  );
}

export default Searchmap;
