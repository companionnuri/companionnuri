import { Space } from 'antd';
import React from 'react';
import styles from "./css/font.module.css";

const logo = {
    fontFamily: 'GmarketSansLight',
    marginBottom: 0,
    fontSize: '42px',
    color:'#fff',
    textAlign:'center',
    letterSpacing: '9px',
}

function Logo() {
    return (
        <p style={logo} className='col-6'>NURI</p>
    );
}

export default Logo;