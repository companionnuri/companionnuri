import CategoryNavbar from './CategoryNavbar';
import Logo from './Logo';
import Searchbar from "./Searchbar";
import styles from "./css/Top.module.css";

import React, {useState,useContext,useRef, useEffect} from 'react';

function Top() {

  return (
    <div>
      <div className={styles.top}>
        <button>
          <CategoryNavbar />
        </button>
        <Logo />
        <Searchbar />
        
      </div>
    </div>
  );
}

export default Top;