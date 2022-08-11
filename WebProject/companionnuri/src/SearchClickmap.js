import Searchmap from "./Searchmap";
import SearchClickmap from "./SearchClickmap";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function SearchClickmain() {
  const location = useLocation();
  // console.log(location);
  const keyword = location.state.keyword;
  const later = location.state.later;
  const inputValue = location.state.inputValue;
  // console.log(keyword, later, inputValue);

  return (
    <div className="d-flex flex-column align-items-center">
      <Top op="true" keyword={keyword} />
      {inputValue === undefined ? (
        <div>
          <Searchmap searchmapkeyword={keyword} />
        </div>
      ) : (
        <SearchClickmap searchmapkeyword={inputValue} later={later} />
      )}
    </div>
  );
}

export default SearchClickmain;
