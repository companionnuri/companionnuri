import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import styles from "./css/Open.module.css";
import { AutoComplete } from "antd";
import SearchContent from "./SearchContent";

const searchBox = {
  boxShadow: "0px 2px 10px rgb(0 0 0 / 15%)",
  zIndex: "110",
  height: "44px",
  border: "2px solid #5f27cd",
  borderRadius: "5px",
  width: "475px",
  marginLeft: "103px",
};
const searchInput = {
  width: "100% !important",
};
const resultBox = {
  width: "475px",
  marginLeft: "103px",
  marginTop: "25px",
  borderTop: "1px solid #DBDEE0",
  borderBottom: "1px solid #DBDEE0",
};
const searchResultP = {
  fontSize: "16px",
  color: "#424242",
};
const searchResultBox = {
  paddingLeft: "103px",
};
const contentText = {
  margin: "0",
  padding: "7.5px 0",
  borderBottom: "1px solid rgb(241,241,241)",
  cursor: "pointer",
  width: "475px",
};

function Open(props) {
  // const [locName, setlocName] = useState("");
  // 최종 아이템
  const [fooditems, setFooditems] = useState("");
  const [cafeitems, setCafeitems] = useState("");
  const [parkitems, setParkitems] = useState("");
  const [houseitems, setHouseitems] = useState("");
  const [hospitalitems, setHospitalitems] = useState("");

  let food = [];
  let cafe = [];
  let park = [];
  let house = [];
  let hospital = [];

  const [inputValue, setinputValue] = useState(null);
  // const [topValue, settopValue] = useState(null);
  // settopValue(props.topinputValue);
  const [open, setOpen] = useState(false);

  let result;
  let message;

  // if (props.topValue) {
  //   result = (
  //     <h1 style={searchResultP} className="my-2">
  //       <b>{props.topValue}</b>의 검색 결과는 다음과 같다
  //     </h1>
  //   );
  // }

  const fetchF = () => {
    if (inputValue) {
      result = (
        <h1 style={searchResultP} className="my-2">
          <b>{inputValue}</b>의 검색 결과는 다음과 같다
        </h1>
      );
      fetch(
        `http://ec2-13-209-237-25.ap-northeast-2.compute.amazonaws.com:8081/nuri/search/${inputValue}`
      )
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          // console.log(typeof res);

          setFooditems(res["restaurant"]);
          setCafeitems(res["cafe"]);
          setParkitems(res["park"]);
          setHospitalitems(res["hospital"]);
          setHouseitems(res["house"]);
        });
    }
  };

  console.log(fooditems);
  console.log(cafeitems);
  console.log(parkitems);
  console.log(hospitalitems);
  console.log(houseitems);

  const fooditemsvalues = Object.values(fooditems);
  for (let i = 0; i < fooditemsvalues.length; i++) {
    const v = fooditemsvalues[i];
    food.push(v);
  }

  const cafeitemsvalues = Object.values(cafeitems);
  for (let i = 0; i < cafeitemsvalues.length; i++) {
    const v = cafeitemsvalues[i];
    cafe.push(v);
  }

  const houseitemsvalues = Object.values(houseitems);
  for (let i = 0; i < houseitemsvalues.length; i++) {
    const v = houseitemsvalues[i];
    house.push(v);
  }

  const parkitemsvalues = Object.values(parkitems);
  for (let i = 0; i < parkitemsvalues.length; i++) {
    const v = parkitemsvalues[i];
    park.push(v);
  }

  const hospitalitemsvalues = Object.values(hospitalitems);
  for (let i = 0; i < hospitalitemsvalues.length; i++) {
    const v = hospitalitemsvalues[i];
    console.log(v);
    hospital.push(v);
  }

  console.log(food);
  console.log(cafe);
  console.log(house);
  console.log(park);
  console.log(Object.values(hospital));

  useEffect(() => {
    fetchF();
  }, [inputValue]);

  return (
    <div className={styles.searchDiv}>
      <div>
        <div style={searchBox}>
          <Searchbar
            setinputValue={setinputValue}
            setOpen={setOpen}
            style={searchInput}
          />
        </div>
        <div style={resultBox}>{result}</div>
        <div>
          <div style={searchResultBox}>
            {cafe.map((user) => (
              <p value={user.locationId} style={contentText}>
                {user.locationName}
              </p>
            ))}
            {food.map((user) => (
              <p value={user.locationId} style={contentText}>
                {user.locationName}
              </p>
            ))}
            {park.map((user) => (
              <p value={user.locationId} style={contentText}>
                {user.locationName}
              </p>
            ))}
            {house.map((user) => (
              <p value={user.locationId} style={contentText}>
                {user.locationName}
              </p>
            ))}
            {hospital.map((user) => (
              <p value={user.locationId} style={contentText}>
                {user.locationName}
              </p>
            ))}
            {/* <SearchContent /> */}
          </div>
        </div>
      </div>
      <button>
        <span className="mt-1">검색별</span>
      </button>
    </div>
  );
}

export default Open;
