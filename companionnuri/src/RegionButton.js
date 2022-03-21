import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegionButton(props) {

    axios.ajax({
        url: "./grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000",
        type: "GET",

        success: function (response) {
            makeList(response);
        },
        error: function (xhr, status, msg) {
            console.log("error");
        },
    });

    function makeList(data) {
        // var slist = `<h1>시/군/구</h1>`
        for (let i = 0; i < data.regcodes.length; i++) {
            setr(`<h1>${data.regcodes[i].name}</h1>`);
        }
    }

    const [r, setr] = useState('');


    function click() {
        props.setRegion("Seoul")
        props.setData("no")
    }

    function click2() {
        props.setRegion("Busan")
        props.setData("no")
    }

    function click3() {
        props.setRegion("Daegu")
        props.setData("no")
    }

    return (
        <div>
            {r}
            <button onClick={click}>서울특별시</button>
            <button onClick={click2}>부산광역시</button>
            <button onClick={click3}>대구광역시</button>
            {/* <button onClick={() => props.setRegion("Daejeon")}>대전광역시</button>
            <button onClick={() => props.setRegion("Gwangju")}>광주광역시</button>
            <button onClick={() => props.setRegion("Incheon")}>인천광역시</button>
            <button onClick={() => props.setRegion("Ulsan")}>울산광역시</button> */}
        </div>
    );
}

export default RegionButton;