import Top from "./Top";
import styles from "./css/Region.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Seoul from "./region/Seoul";
import Busan from "./region/Busan";
import Daegu from "./region/Daegu";
import Incheon from "./region/Incheon";
import Gwangju from "./region/Gwangju";
import Daejeon from "./region/Daejeon";
import Ulsan from "./region/Ulsan";
import Gangwon from "./region/Gangwon";

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

import Gcheorwon from "./region/Gangwon/Gcheorwon";
import Gchuncheon from "./region/Gangwon/Gchuncheon";
import Gdonghae from "./region/Gangwon/Gdonghae";
import Ggangneoung from "./region/Gangwon/Ggangneoung";
import Ggoseong from "./region/Gangwon/Ggoseong";
import Ghoengseong from "./region/Gangwon/Ghoengseong";
import Ghongcheon from "./region/Gangwon/Ghongcheon";
import Ghwacheon from "./region/Gangwon/Ghwacheon";
import Ginje from "./region/Gangwon/Ginge";
import Gjeongseong from "./region/Gangwon/Gjeongseon";
import Gpyeongchang from "./region/Gangwon/Gpyeongchang";
import Gsamcheok from "./region/Gangwon/Gsamcheok";
import Gsokcho from "./region/Gangwon/Gsokcho";
import Gtaebaek from "./region/Gangwon/Gtaebaek";
import Gwonju from "./region/Gangwon/Gwonju";
import Gyanggu from "./region/Gangwon/Gyanggu";
import Gyangyang from "./region/Gangwon/Gyangyang";
import Gyeongwol from "./region/Gangwon/Gyeongwol";

import No from "./region/No";

const regionPage = {
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#FAFBFC",
};
const regionSelectWrap = {
  width: "calc(100% - 133px)",
  paddingLeft: "83px",
};
const resultCommentBoxP = {
  textAlign: "center",
  fontSize: " 18px",
  wordBreak: "keep-all",
};
const searchResultBoxIn = {
  boxShadow: "0 2px 3px 0 rgb(0 1 3 / 12%)",
  backgroundColor: "#FAFBFC",
  borderRadius: "7px",
  width: "calc(100% - 1px)",
  height: "calc(100% - 1px)",
};

function Region(props, { match }) {
  const [region, setRegion] = useState(null);
  const [data, setData] = useState(null);

  const [secondstylename, setSecondStylename] = useState("no");

  const chooseSeoulPage = () => {
    switch (data) {
      case "서울특별시 종로구":
        return <SJongno setinputValue={setinputValue} />;
      case "서울특별시 중구":
        return <SJunggu setinputValue={setinputValue} />;
      case "서울특별시 용산구":
        return <SYongsan setinputValue={setinputValue} />;
      case "서울특별시 성동구":
        return <SSeongdong setinputValue={setinputValue} />;
      case "서울특별시 동대문구":
        return <SDongdaemun setinputValue={setinputValue} />;
      case "서울특별시 중랑구":
        return <SJungnang setinputValue={setinputValue} />;
      case "서울특별시 성북구":
        return <SSeongbuk setinputValue={setinputValue} />;
      case "서울특별시 도봉구":
        return <SDobong setinputValue={setinputValue} />;
      case "서울특별시 노원구":
        return <SNowon setinputValue={setinputValue} />;
      case "서울특별시 은평구":
        return <SEunpyeong setinputValue={setinputValue} />;
      case "서울특별시 서대문구":
        return <SSeodaemun setinputValue={setinputValue} />;
      case "서울특별시 마포구":
        return <SMapo setinputValue={setinputValue} />;
      case "서울특별시 양천구":
        return <SYangcheon setinputValue={setinputValue} />;
      case "서울특별시 강서구":
        return <SGangseo setinputValue={setinputValue} />;
      case "서울특별시 구로구":
        return <SGuro setinputValue={setinputValue} />;
      case "서울특별시 영등포구":
        return <SYeongdeungpo setinputValue={setinputValue} />;
      case "서울특별시 동작구":
        return <SDongjak setinputValue={setinputValue} />;
      case "서울특별시 관악구":
        return <SGwanak setinputValue={setinputValue} />;
      case "서울특별시 서초구":
        return <SSeocho setinputValue={setinputValue} />;
      case "서울특별시 강남구":
        return <SGangnam setinputValue={setinputValue} />;
      case "서울특별시 송파구":
        return <SSongpa setinputValue={setinputValue} />;
      case "서울특별시 강동구":
        return <SGandong setinputValue={setinputValue} />;
      case "강원도 철원군":
        return <Gcheorwon setinputValue={setinputValue} />;

      default:
        return <No />;
    }
  };
  const chooseGangwonPage = () => {
    switch (data) {
      case "강원도 철원군":
        return <Gcheorwon setinputValue={setinputValue} />;
      case "강원도 춘천시":
        return <Gchuncheon setinputValue={setinputValue} />;
      case "강원도 원주시":
        return <Gwonju setinputValue={setinputValue} />;
      case "강원도 강릉시":
        return <Ggangneoung setinputValue={setinputValue} />;
      case "강원도 동해시":
        return <Gdonghae setinputValue={setinputValue} />;
      case "강원도 태백시":
        return <Gtaebaek setinputValue={setinputValue} />;
      case "강원도 속초시":
        return <Gsokcho setinputValue={setinputValue} />;
      case "강원도 삼척시":
        return <Gsamcheok setinputValue={setinputValue} />;
      case "강원도 홍천군":
        return <Ghongcheon setinputValue={setinputValue} />;
      case "강원도 횡성군":
        return <Ghoengseong setinputValue={setinputValue} />;
      case "강원도 영월군":
        return <Gyeongwol setinputValue={setinputValue} />;
      case "강원도 평창군":
        return <Gpyeongchang setinputValue={setinputValue} />;
      case "강원도 정선군":
        return <Gjeongseong setinputValue={setinputValue} />;
      case "강원도 화천군":
        return <Ghwacheon setinputValue={setinputValue} />;
      case "강원도 양구군":
        return <Gyanggu setinputValue={setinputValue} />;
      case "강원도 인제군":
        return <Ginje setinputValue={setinputValue} />;
      case "강원도 고성군":
        return <Ggoseong setinputValue={setinputValue} />;
      case "강원도 양양군":
        return <Gyangyang setinputValue={setinputValue} />;

      default:
        return <No />;
    }
  };
  const [inputValue, setinputValue] = useState(null);

  const navigate = useNavigate();
  const clickButton = (e) => {
    navigate("/Main", {
      state: {
        data,
      },
    });
  };

  return (
    <div>
      <Top />
      <div style={regionPage}>
        {/* <div className={styles.name}>
            <h1>도 / 특별시</h1>
            <h1>시 / 군 / 구</h1>
            <h1>동</h1>
          </div> */}

        <div
          className="row w-100 justify-content-center mt-4 mx-0 "
          style={regionSelectWrap}
        >
          {/* 도 / 특별시 */}
          <div className={styles.regionSelectBox}>
            <RegionButton
              setRegion={setRegion}
              setData={setData}
            ></RegionButton>
          </div>

          {/* 시 / 군 / 구 */}
          <div className={styles.regionSelectBox}>
            <h1>
              {region === "noregion" ? null : null}
              {region === "서울특별시" ? <Seoul setData={setData} /> : null}
              {/* {region === "부산광역시" ? <Busan setData={setData} /> : null}
              {region === "대구광역시" ? <Daegu setData={setData} /> : null}
              {region === "인천광역시" ? <Incheon setData={setData} /> : null}
              {region === "광주광역시" ? <Gwangju setData={setData} /> : null}
              {region === "대전광역시" ? <Daejeon setData={setData} /> : null}
              {region === "울산광역시" ? <Ulsan setData={setData} /> : null}
              {region === "강원도" ? <Gangwon setData={setData} /> : null} */}
            </h1>
          </div>

          {/* 동 */}
          {/* <div className={styles.regionSelectBox}>
            {region === "서울특별시" ? chooseSeoulPage() : null}
            {region === "강원도" ? chooseGangwonPage() : null}
            {region === "Busan" ? chooseBusanPage() : null}
            {region === "Daegu" ? choosePage() : null}
          </div> */}
          <div className={styles.searchResultBox}>
            <div style={searchResultBoxIn}>
              <div class={styles.resultCommentBox}>
                <p className="pt-4 py-3" style={resultCommentBoxP}>
                  {data}
                </p>
              </div>
              <buton className={styles.searchButton} onClick={clickButton}>
                검색
              </buton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Region;
