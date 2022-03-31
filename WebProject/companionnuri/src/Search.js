import Top from "./Top";

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const hd_search_icon = {
    backgroundColor: 'transparent',
    border:'none',
    fontSize: '20px',
    marginRight: '5px',
    color: '#101820',
}

const clickButton = () => {
    console.log(" i'm handleClick!. ")
}


function Search(props) {
    const value = useLocation();
    const searchKeyword = value.state.inputValue;
    
    return (
        <div>
            {/* <button style={hd_search_icon}><i class="fa-solid fa-magnifying-glass" onClick={clickButton}></i></button> */}
            {/* <h1>{props.n}</h1> */}
            <h1>{searchKeyword}의 검색 결과는 다음과 같다</h1>

        </div>
  );
}

export default Search;