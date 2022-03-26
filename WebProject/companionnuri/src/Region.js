// import Top from "./Top";
// import styles from "./css/Region.module.css";
// import React, { useState, useEffect } from 'react';

// import Seoul from "./region/Seoul";
// import Busan from "./region/Busan";
// import Daegu from "./region/Daegu";
// import Daejeon from "./region/Daejeon";
// import Gwangju from "./region/Gwangju";
// import Incheon from "./region/Incheon";
// import Ulsan from "./region/Ulsan";

// import RegionButton from "./RegionButton";

// import Rkdskarn from "./region/Rkdskarn";
// import Rkdehdrn from "./region/Rkdehdrn";
// import Qnrrn from "./region/Qnrrn";

// import No from "./region/No";

// function Region(props, {match}) {

//   const [region, setRegion] = useState('noregion');
//   const [data, setData] = useState("noregion");

//   const [secondstylename, setSecondStylename] = useState('no');

//   const SeoulMenus = [{ name: "강남구", comp: <Rkdskarn /> },  "강동구", "강서구", "강북구", "관악구", "광진구", "구로구", "금천구", "노원구", "동대문구", "도봉구", "동작구",
//     "마포구", "서대문구", "성동구", "성북구", "서초구", "송파구", "구로구", "영등포구", "용산구", "양천구", "은평구", "종로구", "종구", "중랑구"]

//   const chooseSeoulPage = () => {
//     for (let i = 0; i < 25; i++) {
//       switch (data) {
//         case SeoulMenus[i].name : return SeoulMenus[i].comp
//       default:
//         return <No />
//       }
//     }
//   }

//   const searchClick = () => {
//     console.log(123);
//   }

//   const Busanmenus = ["가상구", "강서구", "금정구", "기장군", "남구", "동구", "부산진구", "북구", "사하구", "서구", "수영구", "언제구", "영도구", "중구", "해운대구",]

//   const chooseBusanPage = () => {
//     for (let i = 0; i < 25; i++) {
//       switch (data) {
//         case Busanmenus[i].name : return Busanmenus[i].comp
//       default:
//         return <No />
//       }
//     }
//   }

//   return (
//       <div>
//       <Top />
      
//       <div className={styles.name}>
//         <h1>도 / 특별시</h1>
//         <h1>시 / 군 / 구</h1>
//         <h1>동</h1>
//       </div>

//       <div className={styles.whole}>
//         {/* 도 / 특별시 */}
//         <div className={styles.first}>
//           <RegionButton setRegion={setRegion} setData={setData}></RegionButton>
//         </div>
        
//         {/* 시 / 군 / 구 */}
//         <div className={secondstylename}>
//           <h1>
//             {region === 'noregion' ? null : null}
//             {region === "Seoul" ? <Seoul setData={setData} /> : null}
//             {region === "Busan" ? <Busan setData={setData} /> : null}
//             {region === "Daegu" ? <Daegu setData={setData} /> : null}
//             {region === "Daejeon" ? <Daejeon setData={setData} /> : null}
//             {region === "Gwangju" ? <Gwangju setData={setData} /> : null}
//             {region === "Incheon" ? <Incheon setData={setData} /> : null}
//             {region === "Ulsan" ? <Ulsan setData={setData} /> : null}
//           </h1>
//         </div>

//         {/* 동 */}
//         <div className={secondstylename}>
//           {region === "Seoul" ? chooseSeoulPage() : null}
//           {region === "Busan" ? chooseBusanPage() : null}
//           {/* {region === "Daegu" ? choosePage() : null} */}
//         </div>
//       </div>

//       <div>
//         <buton className={styles.searchButton} onClick={searchClick}>검색</buton>
//       </div>

//     </div>
//   );
// }

// export default Region;