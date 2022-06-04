import Map from "./Map";
import Top from "./Top";
import styles from "./css/Main.module.css";
import { useLocation } from "react-router-dom";

function Main() {
  const value = useLocation();
  const searchKeyword = value.state?.inputValue;
  console.log(searchKeyword);

  return (
    <div className="d-flex flex-column align-items-center">
      {{ searchKeyword } ? <Top regionValue={searchKeyword} /> : <Top />}
      <Map />
    </div>
  );
}

export default Main;
