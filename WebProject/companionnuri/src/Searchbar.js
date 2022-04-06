import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from "./css/Floating.module.css";

const hd_search_box = {
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
    fontSize: '16px',
    marginRight: '5px',
    color: '#494949',
}

const hd_search_input= {
    border:'none',
    fontSize:'16px',
    height:'40px',
    width:'calc(100% - 45px)',
}

function Searchbar() {

    const [inputValue, setinputValue] = useState(null);
    const navigate = useNavigate();

    const clickButton = (e) => {
        navigate('/Search', {
        state: {
            inputValue
        },
      });
    }

    const inputPress = (e) => {
        
        if (e.key === 'Enter') {
            setinputValue(e.target.value)
            clickButton();
        }
    }

    const inputChange = (e) => {
        setinputValue(e.target.value)
    }

    return (
        <div className='d-flex justify-content-end'>
            <div style={hd_search_box}>
                <button style={hd_search_icon}><i class="fa-solid fa-magnifying-glass" onClick={clickButton}></i></button>
                <input className={styles.searchInputFloating} type="text" placeholder="지역명 또는 카테고리를 입력해주세요" style={hd_search_input} onKeyPress={inputPress} onChange={inputChange}></input>
                {/* <FaSearch size="24" color="red" /> */}
            </div>
        </div>
    );
}

export default Searchbar;