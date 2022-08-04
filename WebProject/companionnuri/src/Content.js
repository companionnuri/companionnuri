import React, { useEffect, useState } from "react";

const contentText = {
  margin: "0",
  padding: "7.5px 0",
  borderBottom: "1px solid rgb(241,241,241)",
  cursor: "pointer",
  width: "475px",
};

function Content(props) {
    console.log(props.cafe);
    console.log(props.food);
    console.log(props.park);
    // const nameList = props.food.map((user) => (
    //             <p value={user.locationId} style={contentText}>
    //               {user.locationName}
    //             </p>
    //           ));

    return (
        <div>
        <h1>결과</h1>
    </div>
        // {nameList}
    //   props.cafe.map((user) => (
    //     <p value={user.locationId} style={contentText}>
    //       {user.locationName}
    //     </p>
    //   )),
    //   props.food.map((user) => (
    //     <p value={user.locationId} style={contentText}>
    //       {user.locationName}
    //     </p>
    //   )),
    //   props.park.map((user) => (
    //     <p value={user.locationId} style={contentText}>
    //       {user.locationName}
    //     </p>
    //   )),
    //   props.house.map((user) => (
    //     <p value={user.locationId} style={contentText}>
    //       {user.locationName}
    //     </p>
    //   )),
    //   props.hospital.map((user) => (
    //     <p value={user.locationId} style={contentText}>
    //       {user.locationName}
    //     </p>
    //   ))
    );
}

export default Content;
