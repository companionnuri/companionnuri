import { Space } from 'antd';
import React from 'react';
import "./css/font.module.css";
import { Link } from 'react-router-dom' //****

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
        <a href='/'style={logo} className='col-6'>NURI</a>
    );
}

export default Logo;