import Top from "./Top";
import styles from "./css/Region.module.css";
import React, { useState, useEffect } from 'react';

import Seoul from "./region/Seoul";
import Busan from "./region/Busan";
// import Daegu from "./region/Daegu";
// import Daejeon from "./region/Daejeon";
// import Gwangju from "./region/Gwangju";
// import Incheon from "./region/Incheon";
// import Ulsan from "./region/Ulsan";

import RegionButton from "./RegionButton";

import SeoulRegion from "./region/SeoulRegion";
// import Qnrrn from "./region/Qnrrn";

import No from "./region/No";

function Region(props, { match }) {
    

  const [region, setRegion] = useState('noregion');
  const [data, setData] = useState("noregion");

  const [secondstylename, setSecondStylename] = useState('no');

  const searchClick = () => {
    console.log(123);
  }

  return (
      <div>
          
      <Top />
      
      <div className={styles.name}>
        <h1>도 / 특별시</h1>
        <h1>시 / 군 / 구</h1>
        <h1>동</h1>
      </div>

      <div className={styles.whole}>
        {/* 도 / 특별시 */}
        <div className={styles.first}>
          <RegionButton setRegion={setRegion} setData={setData}></RegionButton>
        </div>
        
        {/* 시 / 군 / 구 */}
        <div className={secondstylename}>
          <h1>
            {region === 'noregion' ? null : null}
            {region === "Seoul" ? <Seoul setData={setData} /> : null}
            {region === "Busan" ? <Busan setData={setData} /> : null}
            {/* {region === "Daegu" ? <Daegu setData={setData} /> : null}
            {region === "Daejeon" ? <Daejeon setData={setData} /> : null}
            {region === "Gwangju" ? <Gwangju setData={setData} /> : null}
            {region === "Incheon" ? <Incheon setData={setData} /> : null}
            {region === "Ulsan" ? <Ulsan setData={setData} /> : null} */}
          </h1>
        </div>

        {/* 동 */}
              <div className={secondstylename}>
          {region === "Seoul" && data === "서울특별시 종로구" ? <SeoulRegion /> : null}
          {/* {region === "Busan" ? chooseBusanPage() : null} */}
          {/* {region === "Daegu" ? choosePage() : null} */}
        </div>
      </div>

      <div>
        <buton className={styles.searchButton} onClick={searchClick}>검색</buton>
      </div>

    </div>
  );
}

export default Region;