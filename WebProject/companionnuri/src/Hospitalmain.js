import Hospitalmap from "./Hospitalmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Hospitalmain() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Top />
      <Hospitalmap />
    </div>
  );
}

export default Hospitalmain;
