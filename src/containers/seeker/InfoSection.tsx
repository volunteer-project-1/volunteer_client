import React from "react";

import { DISABLILITY_LEVEL, DISABLILITY_TYPE } from "@/constants/Resume";
import { dLog } from "@/utils/DebugUtils";
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
            dLog(value);
          }}
        />
      </Editor.Cell>
    </Editor.Row>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.SmallSelect
          placeholder="장애종류"
          options={DISABLILITY_TYPE.map(type => ({
            name: type,
            value: type,
          }))}
        />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallSelect
          placeholder="장애급수"
          options={DISABLILITY_LEVEL.map(level => ({
            name: `${level}등급`,
            value: level,
          }))}
        />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="성별" />
      </Editor.Cell>
    </Editor.Row>
  </Editor>
);

export default InfoSection;
