import React, { useEffect, useState } from "react";
import HouseKakaoMapScript from "./HouseKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Housemap() {
  return (
    <div className="kakaomap">
      <HouseKakaoMapScript />
    </div>
  );
}

export default Housemap;
