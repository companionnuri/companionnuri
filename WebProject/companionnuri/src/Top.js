import Navbar from './Navbar';
import Logo from './Logo';
import Searchbar from "./Searchbar";
import styles from "./css/Top.module.css";

import React, {useState,useContext,useRef, useEffect} from 'react';

function Top() {

  return (
    <div className={styles.hd}>
      <div className='w-100 d-flex justify-content-between align-items-center h-100'>
        <div className='row hd_wrap w-100 align-items-center'>
          <div className='col-3'>
            <Navbar />
          </div>
          <Logo />
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default Top;