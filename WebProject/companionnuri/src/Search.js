import Top from "./Top";

import React, { useState } from 'react';

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

    return (
        <div>
            {/* <button style={hd_search_icon}><i class="fa-solid fa-magnifying-glass" onClick={clickButton}></i></button> */}
            {/* <h1>{props.n}</h1> */}
            <h1>1233333333</h1>
        </div>
  );
}

export default Search;