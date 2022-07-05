import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categoryItemList = {
  padding: "13px 11px 11px",
};
const categoryItemBtn = {
  backgroundColor: "#fff",
  border: "none",
};
const categoryItemTitle = {
  fontSize: "15px",
  marginLeft: "7px",
  letterSpacing: "-0.3px",
};
const categoryItemFoodIcon = {
  color: "#F3887C",
};
const categoryItemPlaceIcon = {
  color: "#63AA41",
};
const categoryItemPlaceIcon2 = {
  color: "#74C0FC",
};
const categoryItemLastList = {
  padding: "13px 11px 11px",
  borderLeft: "1px solid #ededed",
};

function CategoryFloating() {
  const [categoryValue, setcategoryValueValue] = useState(null);
  const navigate = useNavigate();

  const foodButton = () => {
    // console.log("음식점");
    setcategoryValueValue("음식점");
    window.location.href = "/Foodmain";
  };

  const cafeButton = () => {
    // console.log("카페");
    setcategoryValueValue("카페");
    window.location.href = "/Cafemain";
  };

  const parkButton = () => {
    // console.log("공원");
    setcategoryValueValue("공원");
  };

  const hotelButton = () => {
    // console.log("펜션");
    setcategoryValueValue("펜션");
  };

  const hospitalButton = () => {
    // console.log("병원");
    setcategoryValueValue("병원");
  };

  return (
    <div>
      <ul className="list-unstyled m-0 d-flex align-items-center">
        <li className="" style={categoryItemList}>
          <button
            className="d-flex align-items-center"
            style={categoryItemBtn}
            onClick={foodButton}
          >
            <i class="fa-solid fa-utensils" style={categoryItemFoodIcon}></i>
            <span className="fw-bolder" style={categoryItemTitle}>
              음식점
            </span>
          </button>
        </li>
        <li style={categoryItemList}>
          <button
            className="d-flex align-items-center"
            style={categoryItemBtn}
            onClick={cafeButton}
          >
            <i class="fa-solid fa-mug-saucer" style={categoryItemFoodIcon}></i>
            <span className="fw-bolder" style={categoryItemTitle}>
              카페
            </span>
          </button>
        </li>
        <li style={categoryItemList}>
          <button
            className="d-flex align-items-center"
            style={categoryItemBtn}
            onClick={parkButton}
          >
            <i class="fa-solid fa-tree" style={categoryItemPlaceIcon}></i>
            <span className="fw-bolder" style={categoryItemTitle}>
              공원
            </span>
          </button>
        </li>
        <li style={categoryItemList}>
          <button
            className="d-flex align-items-center"
            style={categoryItemBtn}
            onClick={hotelButton}
          >
            <i class="fa-solid fa-hotel" style={categoryItemPlaceIcon}></i>
            <span className="fw-bolder" style={categoryItemTitle}>
              펜션
            </span>
          </button>
        </li>
        <li style={categoryItemList}>
          <button
            className="d-flex align-items-center"
            style={categoryItemBtn}
            onClick={hospitalButton}
          >
            <i
              class="fa-solid fa-briefcase-medical"
              style={categoryItemPlaceIcon2}
            ></i>
            <span className="fw-bolder" style={categoryItemTitle}>
              병원
            </span>
          </button>
        </li>
        <li style={categoryItemLastList}>
          <button style={categoryItemBtn}>
            <i class="fa-solid fa-ellipsis"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CategoryFloating;
