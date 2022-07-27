import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import styles from "./css/Open.module.css";
import { AutoComplete } from "antd";
import SearchContent from "./SearchContent";

const searchBox = {
  boxShadow: "0px 2px 10px rgb(0 0 0 / 15%)",
  zIndex: "110",
  height: "44px",
  border: "2px solid #5f27cd",
  borderRadius: "5px",
  width: "475px",
  marginLeft: "103px",
};
const searchInput = {
  width: "100% !important",
};
const resultBox = {
  width: "475px",
  marginLeft: "103px",
  marginTop: "25px",
  borderTop: "1px solid #DBDEE0",
  borderBottom: "1px solid #DBDEE0",
};
const searchResultP = {
  fontSize: "16px",
  color: "#424242",
};

function Open(props) {
  // const [locName, setlocName] = useState("");
  const [cafeitems, setCafeitems] = useState("");
  const [hospitalitems, setHospitalitems] = useState(""); // 최종 아이템
  const [inputValue, setinputValue] = useState(null);
  // const [topValue, settopValue] = useState(null);
  // settopValue(props.topinputValue);
  const [open, setOpen] = useState(false);
  const [searchRealValue, setsearchRealValue] = useState(null);

  let result;
  let message;

  if (props.topValue) {
    result = (
      <h1 style={searchResultP} className="my-2">
        <b>{props.topValue}</b>의 검색 결과는 다음과 같다
      </h1>
    );
  }

  if (inputValue) {
    result = (
      <h1 style={searchResultP} className="my-2">
        <b>{inputValue}</b>의 검색 결과는 다음과 같다
      </h1>
    );

    fetch(
      `http://ec2-13-209-237-25.ap-northeast-2.compute.amazonaws.com:8081/nuri/search/${inputValue}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCafeitems(res["cafe"]);

        setHospitalitems(res["hospital"]);
      });
  }

  console.log(cafeitems);
  console.log(hospitalitems);

  return (
    <div className={styles.searchDiv}>
      <div>
        <div style={searchBox}>
          <Searchbar
            setinputValue={setinputValue}
            setOpen={setOpen}
            style={searchInput}
          />
        </div>
        <div style={resultBox}>{result}</div>
        <div>
          <div>
            <SearchContent />
          </div>
        </div>
      </div>
      <button>
        <span className="mt-1">검색별</span>
      </button>
    </div>
  );
}

export default Open;
