import React, { useState } from "react";
import Searchbar from "./Searchbar";
import styles from "./css/Open.module.css";

function Open(props) {
  const [inputValue, setinputValue] = useState(null);

  return (
    <div className={styles.searchDiv}>
      <Searchbar setinputValue={setinputValue} />
      <h1>{inputValue}의 검색 결과는 다음과 같다</h1>
    </div>
  );
}

export default Open;
