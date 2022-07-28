/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
const { kakao } = window;

export default function Map(props) {
  const [locName, setlocName] = useState("");

  const fetchF = () => {
    let regionItem = props.kakaoRegion;
    console.log(regionItem);
    let code;

    if (regionItem === "종로구") {
      code = 11110;
    } else {
      code = 11110;
    }

    fetch(
      `http://ec2-13-209-237-25.ap-northeast-2.compute.amazonaws.com:8081/nuri/region/${code}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(`${res}`);
        setlocName(res.locations);
      });
  };

  const start = () => {
    let contentDiv = [];
    let contentlng = [];
    let contentlat = [];
    const keys = Object.keys(locName);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const d = locName[k].locationName;
      const lng = locName[k].locationLng;
      const lat = locName[k].locationLat;
      contentDiv.push(d);
      contentlng.push(lng);
      contentlat.push(lat);
    }
    var positions = [
      {
        // title: "카카오123",
        // content: "<div>33333</div>",
        // latlng: new kakao.maps.LatLng(37.5642135, 127.0016985),
      },
    ];
    let positionContent = {};
    for (let i = 0; i < keys.length; i++) {
      console.log(contentDiv[i], contentlat[i], contentlng[i]);
      positionContent = {
        title: contentDiv[i],
        content: "<div>" + contentDiv[i] + "</div>",
        latlng: new kakao.maps.LatLng(contentlat[i], contentlng[i]),
      };
      positions.push(positionContent);
      // setLoading(false);
    }
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.551425, 126.988),
      level: 7,
    };
    //map
    const map = new kakao.maps.Map(container, options);
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    let marker;
    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35);
      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
      });
      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    }
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }
    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
    marker.setMap(map);
  };

  useEffect(() => {
    fetchF();
  }, []);

  useEffect(() => {
    start();
  }, [fetchF]);

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}
