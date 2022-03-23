import Navbar from './Navbar';
import Logo from './Logo';
import Searchbar from "./Searchbar";
import styles from "./css/Top.module.css";

import React, {useState,useContext,useRef, useEffect} from 'react';

function Top() {

  return (
    <div className={styles.hd}>
      <div className='d-flex justify-contene-between h-100'>
        <button>
          <Navbar />
        </button>
        <Logo />
        <Searchbar />
        
      </div>
    </div>
  );
}

export default Top;