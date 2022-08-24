import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/SearchContent.module.css";

function SearchContent(props) {
  const [inputValue, setinputValue] = useState(props.ckValue);

  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [raddr, setRaddr] = useState("");
  const [tel, setTel] = useState("");
  const navigate = useNavigate();

  const fetchF = () => {
    if (inputValue) {
      fetch(
        `http://ec2-13-209-237-25.ap-northeast-2.compute.amazonaws.com:8081/nuri/detail/${inputValue}`
      )
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          setName(res["location"].locationName);
          setAddr(res["location"].locationAddr);
          setRaddr(res["location"].locationRoadAddr);
          setTel(res["location"].locationTel);
        });
      navigate("/Searchmain", {
        state: {
          inputValue: inputValue,
        },
      });
    }
  };

  useEffect(() => {
    fetchF();
  }, [inputValue]);

  // console.log(props.ckValue);
  return (
    <div className={styles.SearchContent}>
      <h1 className={styles.SearchContentTitle}>{name}</h1>
      <div className={styles.SearchContentAddrBox}>
        <i class="fa-solid fa-location-dot"></i>
        <div>
          <p className={styles.SearchContentAddr}>
            {addr} ({raddr})
          </p>
          {/* <p className={styles.SearchContentRaddr}>{raddr}</p> */}
        </div>
      </div>
      {tel ? (
        <div className={styles.SearchContentTelBox}>
          <i class="fa-solid fa-phone-flip"></i>
          <p className={styles.SearchContentTel}>{tel}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchContent;
