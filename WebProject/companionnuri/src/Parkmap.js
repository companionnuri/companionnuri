import React, { useEffect, useState } from "react";
import ParkKakaoMapScript from "./ParkKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Parkmap() {
  return (
    <div className="kakaomap">
      <ParkKakaoMapScript />
    </div>
  );
}

export default Parkmap;
