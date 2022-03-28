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
import SJungnang from "./region/Seoul/SJungnang";
import SSeongbuk from "./region/Seoul/SSeongbuk";
import SDobong from "./region/Seoul/SDobong";
import SNowon from "./region/Seoul/SNowon";
import SEunpyeong from "./region/Seoul/SEunpyeong";
import SSeodaemun from "./region/Seoul/SSeodaemun";
import SMapo from "./region/Seoul/SMapo";
import SYangcheon from "./region/Seoul/SYangcheon";
import SGangseo from "./region/Seoul/SGangseo";
import SGuro from "./region/Seoul/SGuro";
import SYeongdeungpo from "./region/Seoul/SYeongdeungpo";
import SDongjak from "./region/Seoul/SDongjak";
import SGwanak from "./region/Seoul/SGwanak";
import SSeocho from "./region/Seoul/SSeocho";
import SGangnam from "./region/Seoul/SGangnam";
import SSongpa from "./region/Seoul/SSongpa";
import SGandong from "./region/Seoul/SGandong";

import No from "./region/No";

function Region(props, { match }) {
  const [region, setRegion] = useState('noregion');
  const [data, setData] = useState("noregion");

  const [secondstylename, setSecondStylename] = useState('no');

  const chooseSeoulPage = () => {
    switch (data) {
      case '서울특별시 종로구' : return <SJongno />
      case '서울특별시 중구': return <SJunggu />
      case '서울특별시 용산구': return <SYongsan />
      case '서울특별시 성동구': return <SSeongdong />
      case '서울특별시 동대문구': return <SDongdaemun />
      case '서울특별시 중랑구': return <SJungnang />
      case '서울특별시 성북구': return <SSeongbuk />
      case '서울특별시 도봉구': return <SDobong />
      case '서울특별시 노원구': return <SNowon />
      case '서울특별시 은평구': return <SEunpyeong />
      case '서울특별시 서대문구': return <SSeodaemun />
      case '서울특별시 마포구': return <SMapo />
      case '서울특별시 양천구': return <SYangcheon />
      case '서울특별시 강서구': return <SGangseo />
      case '서울특별시 구로구': return <SGuro />
      case '서울특별시 영등포구': return <SYeongdeungpo />
      case '서울특별시 동작구': return <SDongjak />
      case '서울특별시 관악구': return <SGwanak />
      case '서울특별시 서초구': return <SSeocho />
      case '서울특별시 강남구': return <SGangnam />
      case '서울특별시 송파구': return <SSongpa />
      case '서울특별시 강동구': return <SGandong />
      
      default : return <No />
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