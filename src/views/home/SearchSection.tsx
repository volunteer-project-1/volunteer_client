import React, { ChangeEvent, useState } from "react";

import styles from "@/views/home/SearchSection.module.scss";
import Background from "@/images/home/search-background.jpg";
import Icon from "@/images/home/search-icon.svg";

// 임시로 만듬...
const exampleTags: Array<string> = ["일자리", "패럴림픽", "공개채용", "장애인_일자리"];

const SearchSection = () => {
  const [input, setInput] = useState("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onClickSearch = () => {
    alert(`검색: "${input}"`);
  };

  const onClickTag = (tag: string) => {
    // 테스트용으로 그냥 입력값 뒤쪽에 클릭한 태그를 추가하도록 함.
    setInput(`${input} ${tag}`);
  };

  return (
    <div className={styles.searchSection}>
      <img className={styles.background} src={Background.src} alt={"Background"} />
      <div className={styles.content}>
        <div className={styles.description}>궁금한것은 무엇이든 검색해보세요!</div>
        <div className={styles.searchArea}>
          <img className={styles.searchIcon} src={Icon.src} alt={"Icon"} />
          <input className={styles.searchInput} type={"text"} title={"검색"} value={input} onChange={onChangeInput} />
          <button className={styles.searchButton} onClick={onClickSearch}>
            검색
          </button>
        </div>
        <div className={styles.tags}>
          {exampleTags.map(tag => (
            <button
              className={styles.tagButton}
              key={tag}
              type={"button"}
              onClick={() => {
                onClickTag(tag);
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
