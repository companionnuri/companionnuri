import React, { useEffect, useState } from "react";
import HospitalKakaoMapScript from "./HospitalKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Hospitalmap() {
  return (
    <div className="kakaomap">
      <HospitalKakaoMapScript />
    </div>
  );
}

export default Hospitalmap;
