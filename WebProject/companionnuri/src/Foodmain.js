import Foodmap from "./Foodmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Foodmain() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Top />
      <Foodmap />
    </div>
  );
}

export default Foodmain;
