import React, { useEffect, useState } from "react";
import CafeKakaoMapScript from "./CafeKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Cafemap() {
  return (
    <div className="kakaomap">
      <CafeKakaoMapScript />
    </div>
  );
}

export default Cafemap;
