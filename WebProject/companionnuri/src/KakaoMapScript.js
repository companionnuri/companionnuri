const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(37.551425, 126.988),
    level: 7,
  };
  const map = new kakao.maps.Map(container, options);

  map.panBy(100, 50);
}
