import React from "react";

import Editor from "@/components/editor";

const InfoSection = () => (
  <Editor>
    <Editor.Title>인적사항</Editor.Title>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="이름" />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="생년월일" type="date" />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="연락처" type="tel" />
      </Editor.Cell>
    </Editor.Row>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="이메일" type="email" />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallAddress
          placeholder="주소"
          onChange={value => {
            console.log(value);
          }}
        />
      </Editor.Cell>
    </Editor.Row>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="장애종류" />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="장애급수" />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="성별" />
      </Editor.Cell>
    </Editor.Row>
  </Editor>
);

export default InfoSection;
