import Map from "./Map";
import Top from "./Top";
import styles from "./css/Region.module.css";
import Menubar from "./Menubar";

import React, { useState, useEffect } from 'react';
import scrollbar from 'smooth-scrollbar';

import Seoul from "./region/Seoul";
import Busan from "./region/Busan";

import Rhksdkrrn from "./region/Rhksdkrrn";
import Qnrrn from "./region/Qnrrn";
import No from "./region/No";


function Region(props) {

  const [value, setValue] = useState('noregion')

  const [gg, setGG] = useState(false)

  const [secondstylename, setSecondStylename] = useState('no')

  const buttonClick = () => {
    setValue('Seoul');
    setSecondStylename('second')
  }
  const buttonClick2 = () => {
    setValue('Busan');
    setSecondStylename('second')
    setData('noregion')
  }
  const buttonClick3 = () => {
    setSecondStylename('second')
    setGG(!gg)
  }

  const [data, setData] = useState("noregion");

  return (
      <div>
      <Top />
      
      <div className={styles.name}>
        <h1>도 / 특별시</h1>
        <h1>시 / 군 / 구</h1>
        <h1>동</h1>
      </div>

      <div className={styles.whole}>
        <div className={styles.first}>
          <button onClick={buttonClick}>서울특별시</button>
          <button onClick={buttonClick2}>부산광역시</button>
          <h1>대전특별시</h1>
          <h1>무서ㅣ기광역시</h1>
          <h1>ㅋㅋㅋ광역시</h1>
          <h1>대구광역시</h1>
          <h1>울산광역시</h1>
        </div>
        
        <div className={secondstylename}>
          <h1>
            {value === 'noregion' ? null : null}
            {value === "Seoul" ? <Seoul setData={setData} /> : null}
            {value === "Busan" ? <Busan setData={setData} /> : null}
          </h1>
        </div>

        <div className={secondstylename}>
          <h1>
            {data === 'noregion' ? null : null}
            {data === 'rhksdkrrn' ? <Rhksdkrrn /> : null}
            {data === 'qnrrn' ? <Qnrrn /> : null}
          </h1>
        </div>
      </div>

    </div>
  );
}

export default Region;