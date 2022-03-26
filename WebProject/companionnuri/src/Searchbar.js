import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
// import { FaSearch } from 'react-icons/fa';

const hd_search_box = {
    marginRight:'30px',
    width: '400px',
    borderRadius:'20px',
    backgroundColor: '#fff',
    height:'40px',
    padding:'0 15px 0 10px',
    display: 'flex',
    alignItems:'center',
}

const hd_search_icon = {
    backgroundColor: 'transparent',
    border:'none',
    fontSize: '20px',
    marginRight: '5px',
    color: '#101820',
}

const hd_search_input= {
    border:'none',
    fontSize:'18px',
    height:'40px',
    width:'calc(100% - 45px)',
}

function Searchbar() {
    return (
        <div className='col-3 d-flex justify-content-end'>
            <div style={hd_search_box}>
                <button style={hd_search_icon}><i class="fa-solid fa-magnifying-glass"></i></button>
                <input type="text" placeholder="Search.." style={hd_search_input}></input>
                {/* <FaSearch size="24" color="red" /> */}
            </div>
        </div>
    );
}

export default Searchbar;