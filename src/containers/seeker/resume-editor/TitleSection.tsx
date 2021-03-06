import React from "react";

import { useValue } from "@/utils/StateUtils";
import "@/containers/seeker/resume-editor/TitleSection.scoped.scss";

const TitleSection = () => {
  const [title, onChangeTitle] = useValue("");

  return (
    <div className="titleSection">
      <input className="input" placeholder="나를 한 줄로 표현해 보세요!" value={title} onChange={onChangeTitle} />
    </div>
  );
};

export default TitleSection;
