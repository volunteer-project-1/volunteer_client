import React from "react";

import Editor from "@/components/editor";

const HistorySection = () => (
  <Editor>
    <Editor.Title>기업연혁을 입력해주세요.</Editor.Title>
    <Editor.Row>
      <Editor.Cell>
        <Editor.SmallSelect
          placeholder="년도"
          options={[
            { name: "2022", value: 2022 },
            { name: "2021", value: 2021 },
            { name: "2020", value: 2020 },
          ]}
        />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="내용을 입력해주세요." />
      </Editor.Cell>
    </Editor.Row>
  </Editor>
);

export default HistorySection;
