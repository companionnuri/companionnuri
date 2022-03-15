import React, { useState, useEffect } from 'react';
import styles from "../css/Seoul.module.css";

function Seoul(props) {
    return (
      <div className={styles.btnDiv}>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>강남구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>강동구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>강서구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>강북구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>관악구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>광진구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>구로구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>금천구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>노원구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>동대문구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>도봉구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>동작구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>마포구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>서대문구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>성동구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>성북구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>서초구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>송파구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>영등포구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>용산구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>양천구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>은평구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>종로구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>중구</button>
        <button className={styles.btn} onClick={() => props.setData("rhksdkrrn")}>중랑구</button>
      </div>
  );
}

export default Seoul;
