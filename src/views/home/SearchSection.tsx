import React, { ChangeEvent, useState } from "react";

import styles from "@/views/home/SearchSection.module.scss";
import Background from "@/images/home-search.jpg";

const SearchSection = () => {
  const [input, setInput] = useState("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onClickSearch = () => {
    alert(`검색: "${input}"`);
  };

  return (
    <div className={styles.searchSection}>
      <img className={styles.background} src={Background.src} alt={"Background"} />
      <div className={styles.content}>
        <div className={styles.description}>궁금한것은 무엇이든 검색해보세요!</div>
        <div className={styles.searchArea}>
          <input className={styles.searchInput} type={"text"} value={input} onChange={onChangeInput} />
          <button className={styles.searchButton} onClick={onClickSearch}>
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
