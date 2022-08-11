import React, { useState, useEffect } from "react";

function Detail(props) {

    console.log(props.kakaoclick);
    const [data, setData] = useState(props.kakaoclick);
    const [name, setName] = useState("");
    const [addr, setAddr] = useState("");
    const [raddr, setRaddr] = useState("");
    const [tel, setTel] = useState("");

    const [value, setValue] = useState(false);
    
    const fetchF = () => {
    if (data) {
      fetch(
        `http://ec2-13-209-237-25.ap-northeast-2.compute.amazonaws.com:8081/nuri/detail/${data}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setName(res["location"].locationName);
          setAddr(res["location"].locationAddr);
          setRaddr(res["location"].locationRoadAddr);
          setTel(res["location"].locationTel);
        });
    }
    };

      useEffect(() => {
        fetchF();
      }, [data]);
    
    useEffect(() => {
      setData(props.kakaoclick);
    }, [props.kakaoclick]);
    
    const backresult = () => {
      setValue(!value);
      console.log(value);
    props.setDetailopen(value);
        
    };

    return (
      <div style={{marginLeft:800
      }}>
        <h1>{name}</h1>
        <h1>{addr}</h1>
        <h1>{raddr}</h1>
        <h1>{tel}</h1>
        <button onClick={backresult}>취소</button>
      </div>
    );
};

export default Detail;
