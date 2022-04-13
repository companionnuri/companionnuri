import React, { useState } from "react";
import Searchbar from "./Searchbar";
import styles from "./css/Open.module.css";
import { AutoComplete } from "antd";
import SearchContent from "./SearchContent";


const searchBox = {
  boxShadow: '0px 2px 10px rgb(0 0 0 / 15%)',
  zIndex: '110',
  height: '44px',
  border: '2px solid #5f27cd',
  borderRadius: '5px',
  width: '475px',
  marginLeft: '103px',
}
const searchInput ={
  width: '100% !important',
}
const resultBox = {
  width: '475px',
  marginLeft: '103px',
  marginTop: '25px',
  borderTop: '1px solid #DBDEE0',
  borderBottom: '1px solid #DBDEE0'
}
const searchResultP = {
  fontSize: '16px',
  color: '#424242',
}

function Open(props) {
  const [inputValue, setinputValue] = useState(null);
  // const [topValue, settopValue] = useState(null);
  // settopValue(props.topinputValue);
  const [open, setOpen] = useState(false);

  let result;
  let message;

  if (props.topValue) {
    result = <h1 style={searchResultP}><b>{props.topValue}</b>의 검색 결과는 다음과 같다</h1>;
  }

  if (inputValue) {
    result = <h1 style={searchResultP} className="my-2"><b>{inputValue}</b>의 검색 결과는 다음과 같다</h1>;
  }



  return (
    <div className={styles.searchDiv}>
      <div >
        <div style={searchBox}>
          <Searchbar setinputValue={setinputValue} setOpen={setOpen} style={searchInput}/>
        </div>
        <div style={resultBox}>
          {result}
        </div>
        <div>
          <div>
            <SearchContent/>
          </div>
        </div>
      </div>
      <button>
        <span className="mt-1">
          검색별
        </span>
      </button>
    </div>
  );
}

export default Open;
