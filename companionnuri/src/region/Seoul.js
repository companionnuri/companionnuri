import React, { useState, useEffect } from 'react';
import styles from "../css/Seoul.module.css";

function Seoul(props) {
  const menus = ["강남구", "강동구", "강서구", "강북구", "관악구", "광진구", "구로구", "금천구", "노원구", "동대문구", "도봉구", "동작구",
    "마포구", "서대문구", "성동구", "성북구", "서초구", "송파구", "구로구", "영등포구", "용산구", "양천구", "은평구", "종로구", "종구", "중랑구"]
  const menuList = menus.map((region) => (<button className={styles.btn} onClick={() => props.setData(region)}>{region}</button>));
  
    return (
      <div className={styles.btnDiv}>
        {menuList}
      </div>
  );
}

export default Seoul;
