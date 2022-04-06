import React, { useState } from "react";

const submenuItem = {
  width: "100%",
  height: "66px",
};
const subMenuItemBtn = {
  backgroundColor: "#fff",
  border: "none",
};
const submenuItemTitle = {
  fontSize: "13px",
  color: "#494949",
};
const submenuItemIcon = {
  color: "#494949",
};

function SubsideMenu(props) {
  const [value, setValue] = useState(true);

  const RegionhButtonClick = () => {
    window.location.href = "/Region";
  };

  const searchButtonClick = () => {
    setValue(!value);
    console.log(value);
    props.setOpen(value);
  };

  return (
    <nav>
      <ul className="m-0 p-0">
        <li className="list-unstyled" style={submenuItem}>
          <button
            onClick={searchButtonClick}
            className="d-flex flex-column align-items-center justify-content-center w-100 h-100 "
            style={subMenuItemBtn}
          >
            <i class="fa-solid fa-arrow-pointer" style={submenuItemIcon}></i>
            <span className="mt-1" style={submenuItemTitle}>
              검색별
            </span>
          </button>
        </li>
        <li className="list-unstyled" style={submenuItem}>
          <button
            onClick={RegionhButtonClick}
            className="d-flex flex-column align-items-center justify-content-center w-100 h-100 "
            style={subMenuItemBtn}
          >
            <i class="fa-solid fa-map" style={submenuItemIcon}></i>
            <span className="mt-1" style={submenuItemTitle}>
              지도별
            </span>
          </button>
        </li>
      </ul>

      {/* {value ? 
            <button onClick={buttonClick} style={hd_burger_btn}><i class="fa-solid fa-x"></i></button> :
            <button onClick={buttonClick} style={hd_burger_btn}><i class="fa-solid fa-bars"></i></button>
          }
          <div>
              {value ? <Menubar /> : null}
          </div> */}
    </nav>
  );
}

export default SubsideMenu;
