import Top from "./Top";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const hd_search_icon = {
  backgroundColor: "transparent",
  border: "none",
  fontSize: "20px",
  marginRight: "5px",
  color: "#101820",
  width: "100%",
  height: "100vh",
  position: "absolute",
  left: 0,
  top: 0,
};

const clickButton = () => {
  console.log(" i'm handleClick!. ");
};

function Search(props) {
  const value = useLocation();
  const searchKeyword = value.state.data;

  return (
    <div>
      <h1>{searchKeyword}의 검색 결과는 다음과 같다</h1>
    </div>
  );
}

export default Search;
