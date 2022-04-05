import Navbar from './Navbar';
import SubsideMenu from './SubsideMenu';
import Logo from './Logo';
import Searchbar from "./Searchbar";
import styles from "./css/Top.module.css";

import React, {useState,useContext,useRef, useEffect} from 'react';

function Top() {

  return (
    <div className={styles.hd}>
      <div className='w-100'>
        <div className='hd_wrap w-100'>
          {/* <div>
            <Navbar />
          </div> */}
          <Logo />
          <SubsideMenu />
          {/* <Searchbar /> */}

        </div>
      </div>
    </div>
  );
}

export default Top;