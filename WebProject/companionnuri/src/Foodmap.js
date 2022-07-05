import React, { useEffect, useState } from "react";
import FoodKakaoMapScript from "./FoodKakaoMapScript";
import styles from "./css/Map.module.css";
const { kakao } = window;

function Foodmap() {
  return (
    <div className="kakaomap">
      <FoodKakaoMapScript />
    </div>
  );
}

export default Foodmap;
