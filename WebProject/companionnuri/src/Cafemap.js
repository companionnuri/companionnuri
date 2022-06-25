import React, { useEffect, useState } from "react";
import CafeKakaoMapScript from "./CafeKakaoMapScript";
import styles from "./css/Map.module.css";

function Cafemap() {
  const [locName, setLocName] = useState(null);
  useEffect(() => {
    CafeKakaoMapScript();
  }, []);

  return (
    <div>
      <div id="cafemap" className={styles.mymap}></div>
    </div>
  );
}

export default Cafemap;
