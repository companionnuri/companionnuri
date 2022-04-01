import React, { useState } from 'react';
import styles from "./css/Menubar.module.css";

const hd_nav_wrap = {
  width: '400px',
  height: '100vh',
  position: 'fixed',
  left:'0px',
  top:'100px',
  background: '#fff',
  boxShadow: '10px 0px 9px rgb(0 0 0 / 10%)',
}
const hd_nav_title = {
  color: '#101820',
}

function Menubar() {

  const [data, setData] = useState(true);

  const categoryClick = (e) => {
    console.log(123)
    setData(!data)
  }

  return (
    <div style={hd_nav_wrap}>
      <div>
        <a onClick={categoryClick} style={hd_nav_title}>카테고리별</a>
      </div>
      <h3>
        <a href='/Region' style={hd_nav_title}>지역별</a>
      </h3>
    </div>
  );
}

export default Menubar;
