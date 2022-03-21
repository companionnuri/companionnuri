import React, { useState, useEffect } from 'react';
import Menubar from "./Menubar";

function Navbar() {
    const [value, setValue] = useState(false)

    const buttonClick = () => {
        setValue(!value);
    }

  return(
      <div>
          <button onClick={buttonClick}>햄버거버튼{value ? <Menubar /> : null} </button>
    </div>
  )
}

export default Navbar;