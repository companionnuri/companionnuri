import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 

function Menubar() {

  const buttonClick = () => {
      window.location.href = "/category"
  }
  const buttonClick2 = () => {
      window.location.href = "/region"
  }

  return (
    <div>
        <button onClick={buttonClick}>팬션</button>
          <button onClick={buttonClick2}>식당</button>
          <button onClick={buttonClick2}>카페</button>
          <button onClick={buttonClick2}>공원</button>
          <button onClick={buttonClick2}>병원</button>
    </div>
  );
}

export default Menubar;
