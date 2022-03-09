import Navbar from './Navbar';
import Logo from './Logo';
import Searchbar from "./Searchbar";
import styles from "./css/Top.module.css";

function Top() {
  return (
      <div>
          <div className={styles.top}>
              <Navbar />
              <Logo />
              <Searchbar />
          </div>
    </div>
  );
}

export default Top;