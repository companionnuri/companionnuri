import Map from "./Map";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";

function Main() {
  const value = useLocation();
  // const searchKeyword = value.state.inputValue;

  return (
    <div className="d-flex flex-column align-items-center">
      {/* <Top regionValue={searchKeyword} /> */}
      <Top />
      <Map />
    </div>
  );
}

export default Main;
