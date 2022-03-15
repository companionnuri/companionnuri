import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Searchbar() {
    return (
        <div>
            <input type="text" placeholder="Search.."></input>
            <FaSearch size="24" color="red" />
        </div>
    );
}

export default Searchbar;