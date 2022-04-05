import { Space } from 'antd';
import React from 'react';
import "./css/font.module.css";
import { Link } from 'react-router-dom' //****

const logo = {
    fontFamily: 'GmarketSansLight',
    marginBottom: 0,
    fontSize: '20px',
    color:'#5f27cd',
    textAlign:'center',
    letterSpacing: '0px',
    textDecoration: 'none',
}

const logoBox = {
    height: '83px',
    borderBottom: '1px solid #E2E2E2',
}

function Logo() {
    return (
        <div className='text-center w-100 d-flex align-items-center justify-content-center' style={logoBox}>
            <a href='/'style={logo} className='fw-bold'>NURI</a>
        </div>
    );
}

export default Logo;