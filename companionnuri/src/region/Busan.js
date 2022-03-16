import React, { useState, useEffect } from 'react';
import styles from "../css/Seoul.module.css";

function Busan(props) {
  const menus = ["가상구", "강서구", "금정구", "기장군", "남구", "동구", "부산진구", "북구", "사하구", "서구", "수영구", "언제구", "영도구", "중구", "해운대구", ]
  const menuList = menus.map((region) => (<button className={styles.btn} onClick={() => props.setData(region)}>{region}</button>));
  
    return (
      <div className={styles.btnDiv}>
        {menuList}
      </div>
  );
}

export default Busan;
