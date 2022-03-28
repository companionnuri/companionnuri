import Top from "./Top";
import styles from "./css/Region.module.css";
import React, { useState } from 'react';

import Seoul from "./region/Seoul";
import Busan from "./region/Busan";
import Daegu from "./region/Daegu";
import Incheon from "./region/Incheon";
import Gwangju from "./region/Gwangju";
import Daejeon from "./region/Daejeon";
import Ulsan from "./region/Ulsan";

import RegionButton from "./RegionButton";

import SJongno from "./region/Seoul/SJongno";
import SJunggu from "./region/Seoul/SJunggu";
import SYongsan from "./region/Seoul/SYongsan";
import SSeongdong from "./region/Seoul/SSeongdong";
import SDongdaemun from "./region/Seoul/SDongdaemun";

import No from "./region/No";

function Region(props, { match }) {
  const [region, setRegion] = useState('noregion');
  const [data, setData] = useState("noregion");

  const [secondstylename, setSecondStylename] = useState('no');

  const SeoulMenus = [{ name: "서울특별시 종로구", comp: <SJongno /> }, { name: "서울특별시 중구", comp: <SJunggu /> },
    { name: "서울특별시 용산구", comp: <SYongsan /> }, { name: "서울특별시 성동구", comp: <SSeongdong /> }, { name: "서울특별시 동대문구", comp: <SDongdaemun /> },
    { name: "서울특별시 중랑구", comp: <SJunggu /> }, { name: "서울특별시 성북구", comp: <SJunggu /> }, { name: "서울특별시 도봉구", comp: <SJunggu /> },
    { name: "서울특별시 노원구", comp: <SJunggu /> }, { name: "서울특별시 은평구", comp: <SJunggu /> }, { name: "서울특별시 서대문구", comp: <SJunggu /> },
    { name: "서울특별시 마포구", comp: <SJunggu /> }, { name: "서울특별시 양천구", comp: <SJunggu /> }, { name: "서울특별시 강서구", comp: <SJunggu /> },
    { name: "서울특별시 구로구", comp: <SJunggu /> }, { name: "서울특별시 영등포구", comp: <SJunggu /> }, { name: "서울특별시 동작구", comp: <SJunggu /> },
    { name: "서울특별시 관악구", comp: <SJunggu /> }, { name: "서울특별시 서초구", comp: <SJunggu /> }, { name: "서울특별시 강남구", comp: <SJunggu /> },
    { name: "서울특별시 송파구", comp: <SJunggu /> }, { name: "서울특별시 강동구", comp: <SJunggu /> },]

  console.log(data)
  const chooseSeoulPage = () => {
    for (let i = 0; i < 25; i++) {
      switch (data) {
        case SeoulMenus[i].name : return SeoulMenus[i].comp
      default:
        return <No />
      }
    }
  }

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
            {region === "서울특별시" ? <Seoul setData={setData} /> : null}
            {region === "부산광역시" ? <Busan setData={setData} /> : null}
            {region === "대구광역시" ? <Daegu setData={setData} /> : null}
            {region === "인천광역시" ? <Incheon setData={setData} /> : null}
            {region === "광주광역시" ? <Gwangju setData={setData} /> : null}
            {region === "대전광역시" ? <Daejeon setData={setData} /> : null}
            {region === "울산광역시" ? <Ulsan setData={setData} /> : null}
          </h1>
        </div>

        {/* 동 */}
              <div className={secondstylename}>
          {/* {region === "서울특별시" && data === "서울특별시 종로구" ? <Jongno /> : null} */}
          {region === "서울특별시" ? chooseSeoulPage() : null}
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