import React from 'react';
// import { FaSearch } from 'react-icons/fa';

const hd_search_box = {
}

function Searchbar() {
    return (
        <div className='col-3' style={hd_search_box}>
            <input type="text" placeholder="Search.."></input>
            {/* <FaSearch size="24" color="red" /> */}
        </div>
    );
}

export default Searchbar;