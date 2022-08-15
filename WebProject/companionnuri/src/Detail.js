import React, { useState, useEffect } from "react";
import styles from './css/Detail.module.css';

function Detail(props) {

    console.log(props.kakaoclick);
    const [data, setData] = useState(props.kakaoclick);
    const [name, setName] = useState("");
    const [addr, setAddr] = useState("");
    const [raddr, setRaddr] = useState("");
    const [tel, setTel] = useState("");

    const [value, setValue] = useState(false);
    
    const fetchF = () => {
    if (data) {
      fetch(
        `http://ec2-13-209-237-25.ap-northeast-2.compute.amazonaws.com:8081/nuri/detail/${data}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setName(res["location"].locationName);
          setAddr(res["location"].locationAddr);
          setRaddr(res["location"].locationRoadAddr);
          setTel(res["location"].locationTel);
        });
    }
    };

      useEffect(() => {
        fetchF();
      }, [data]);
    
    useEffect(() => {
      setData(props.kakaoclick);
    }, [props.kakaoclick]);
    
    const backresult = () => {
      setValue(!value);
      console.log(value);
    props.setDetailopen(value);
        
    };

    return (
      <div className={styles.detailBox}>
        <h1 className={styles.detailTitle}>{name}</h1>
        <button className={styles.detailBackBtn} onClick={backresult}><i class="fa-solid fa-x"></i></button>
        <div className={styles.detailAddrBox}>
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <p>{addr} ({raddr})</p>
          </div>
        </div>
        {tel ? 
        <div className={styles.detailTelBox}>
          <i class="fa-solid fa-phone-flip"></i>
          <p>{tel}</p>
        </div>
        : ''}
      </div>
    );
};

export default Detail;
