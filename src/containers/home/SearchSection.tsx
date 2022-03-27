import React, { ChangeEvent, useState } from "react";

import "@/containers/home/SearchSection.scoped.scss";
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
    <div className="searchSection">
      <img className="background" src={Background.src} alt={"Background"} />
      <div className="content">
        <div className="description">궁금한것은 무엇이든 검색해보세요!</div>
        <div className="searchArea">
          <img className="searchIcon" src={Icon.src} alt={"Icon"} />
          <input className="searchInput" type={"text"} title={"검색"} value={input} onChange={onChangeInput} />
          <button className="searchButton" onClick={onClickSearch}>
            검색
          </button>
        </div>
        <div className="tags">
          {exampleTags.map(tag => (
            <button
              className="tagButton"
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
