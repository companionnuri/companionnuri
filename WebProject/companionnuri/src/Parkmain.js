import Parkmap from "./Parkmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Parkmain() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Top />
      <Parkmap />
    </div>
  );
}

export default Parkmain;
