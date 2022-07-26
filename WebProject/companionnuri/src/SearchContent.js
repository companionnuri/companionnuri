import React from "react";
import styles from "./css/SearchContent.module.css";

const SearchContentUl = {
  width: "475px",
  marginLeft: "103px",
  listType: "none",
};
const SearchContentLi = {
  listType: "none",
  padding: "18px 0px",
  borderBottom: "1px solid",
  borderColor: "#ecf0f2",
  cursor: "pointer",
};
const contentP = {
  fontSize: "15px",
  margin: "5px 0",
};

function SearchContent(props) {
  return (
    <div>
      <div style={SearchContentUl}>
        <div style={SearchContentLi}>
          {/* <p className={styles.SearchContentTit}>화미주아티클헤어 구미점</p>
          <p className="mb-0 d-flex" style={contentP}><p className={styles.categoryLabel}>카테고리</p>미용실</p>
          <p className="mb-0 d-flex" style={contentP}><p className={styles.categoryLabel}>위치</p> 구미 원평동</p> */}
        </div>
      </div>
    </div>
  );
}

export default SearchContent;
