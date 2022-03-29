import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
import Search from "./Search";

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

    const [inputValue, setinputValue] = useState(null);

    const clickButton = (e) => {
        alert(inputValue)
        return <Search />
    }

    const inputPress = (e) => {
        
        if (e.key === 'Enter') {
            setinputValue(e.target.value)
            clickButton();
        }
    }

    const inputChange = (e) => {
        console.log(e.target.value)
        setinputValue(e.target.value)
    }

    return (
        <div className='col-3 d-flex justify-content-end'>
            <div style={hd_search_box}>
                {/* <Search /> */}
                {/* <Search text="IT IS BUTTON11`1" onClick={clickButton}></Search>; */}
                <button style={hd_search_icon}><i class="fa-solid fa-magnifying-glass" onClick={clickButton}></i></button>
                <input type="text" placeholder="Search.." style={hd_search_input} onKeyPress={inputPress} onChange={inputChange}></input>
                {/* <FaSearch size="24" color="red" /> */}
            </div>
        </div>
    );
}

export default Searchbar;