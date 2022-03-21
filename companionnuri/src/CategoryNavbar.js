import React, { useState, useEffect } from 'react';
import CategoryMenubar from "./CategoryMenubar";

function CategoryNavbar() {
    const [value, setValue] = useState(true)

    const buttonClick = () => {
        setValue(!value);
    }

  return(
      <div>
          <button onClick={buttonClick}>{value ? <CategoryMenubar /> : null} </button>
    </div>
  )
}

export default CategoryNavbar;