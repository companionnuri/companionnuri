import React from 'react';

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
  return (
    <div style={hd_nav_wrap}>
      <div>
        <h3 style={hd_nav_title}>카테고리별</h3>
      </div>
      <h3>
        <a href='#' style={hd_nav_title}>지역별</a>
      </h3>
    </div>
  );
}

export default Menubar;
