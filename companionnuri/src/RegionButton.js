function RegionButton(props) {

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
            <button onClick={click}>서울특별시</button>
            <button onClick={click2}>부산광역시</button>
            <button onClick={click3}>대구광역시</button>
            <button onClick={() => props.setRegion("Daejeon")}>대전광역시</button>
            <button onClick={() => props.setRegion("Gwangju")}>광주광역시</button>
            <button onClick={() => props.setRegion("Incheon")}>인천광역시</button>
            <button onClick={() => props.setRegion("Ulsan")}>울산광역시</button>
        </div>
    );
}

export default RegionButton;