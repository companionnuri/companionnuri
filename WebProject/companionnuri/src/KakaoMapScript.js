const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(37.5642135, 127.0016985),
        level: 1
    };
    const map = new kakao.maps.Map(container, options);
    map.panBy(100, 50)
}