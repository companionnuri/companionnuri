import Map from "./Map";
import Top from "./Top";
import styles from "./css/Region.module.css"

function Region() {
  return (
      <div>
          <Top />
        <div className={styles.name}>
        <h1>도 / 특별시</h1>
        <h1>시 / 군 / 구</h1>
        <h1>동</h1>
      </div>
      <div className={styles.regiontable}>
        <table>
          <thead>
            <tr>강남구</tr>
          </thead>
          <tbody>
            <tr>서초구</tr>
            <tr>서초구</tr>
            <tr>서초구</tr>
            <tr>서초구</tr>
            <tr>서초구</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Region;