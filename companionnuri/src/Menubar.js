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
      <button onClick={buttonClick}>카테고리별</button>
      <button onClick={buttonClick2}>지역별</button>
    </div>
  );
}

export default Menubar;
