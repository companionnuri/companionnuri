import React, { useState, useEffect } from 'react';
import Menubar from "./Menubar";

const hd_burger_btn = {
}

function Navbar() {
    const [value, setValue] = useState(false)

    const buttonClick = () => {
        setValue(!value);
    }

  return(
      <nav className='col-3' style={hd_burger_btn}>
          <button onClick={buttonClick}><i class="fa-solid fa-bars"></i>{value ? <Menubar /> : null} </button>
      </nav>
  )
}

export default Navbar;