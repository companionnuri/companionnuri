import Housemap from "./Housemap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Housemain() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Top />
      <Housemap />
    </div>
  );
}

export default Housemain;
