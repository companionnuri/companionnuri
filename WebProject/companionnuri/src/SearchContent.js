import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
          console.log(res);
          setName(res["location"].locationName);
          setAddr(res["location"].locationAddr);
          setRaddr(res["location"].locationRoadAddr);
          setTel(res["location"].locationTel);
        });
      navigate("/Searchmain", {
        state: {
          inputValue : inputValue,
        },
      });
    }
  };

  useEffect(() => {
    fetchF();
  }, [inputValue]);

  // console.log(props.ckValue);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{addr}</h1>
      <h1>{raddr}</h1>
      <h1>{tel}</h1>
    </div>
  );
}

export default SearchContent;
