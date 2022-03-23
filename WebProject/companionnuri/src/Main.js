import Map from "./Map";
import Top from "./Top";
import styles from "./css/Main.module.css";

function Main() {
  return (
      <div className="d-flex flex-column align-items-center">
          <Top />
          <Map />
    </div>
  );
}

export default Main;