import React, { useEffect, useState } from "react";
import RegionKakaoMapScript from "./RegionKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Regionmap(props) {
  let regionItem = props.item;
  //   console.log(regionItem);

  return (
    <div className="kakaomap">
      <RegionKakaoMapScript kakaoRegion={regionItem} />
    </div>
  );
}

export default Regionmap;
