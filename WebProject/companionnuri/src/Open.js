import React, { useState } from "react";
import Searchbar from "./Searchbar";
import styles from "./css/Open.module.css";

function Open(props) {
  const [inputValue, setinputValue] = useState(null);
  // const [topValue, settopValue] = useState(null);
  // settopValue(props.topinputValue);
  const [open, setOpen] = useState(false);

  let result;

  if (props.topValue) {
    result = <h1>{props.topValue}의 검색 결과는 다음과 같다</h1>;
  }

  if (inputValue) {
    result = <h1>{inputValue}의 검색 결과는 다음과 같다</h1>;
  }

  return (
    <div className={styles.searchDiv}>
      <Searchbar setinputValue={setinputValue} setOpen={setOpen} />
      {result}
    </div>
  );
}

export default Open;
