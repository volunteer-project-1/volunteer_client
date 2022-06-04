import React from "react";

import Editor from "@/components/editor";
import { EMPLOY_TYPE } from "@/constants/Resume";

const hours = Array.from(Array(24).keys());

const ConditionSection = () => (
  <Editor>
    <Editor.Title>근무조건</Editor.Title>
    <Editor.Title>근무형태</Editor.Title>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.SmallSelect
          placeholder="근무형태를 선택해주세요."
          options={EMPLOY_TYPE.map((type, index) => ({ name: type, value: index }))}
        />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="직접입력" />
      </Editor.Cell>
    </Editor.Row>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.SmallSelect
          placeholder="출근시간을 선택해주세요."
          options={hours.map(hour => ({ name: `${hour}시`, value: hour }))}
        />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallSelect
          placeholder="퇴근시간을 선택해주세요."
          options={hours.map(hour => ({ name: `${hour}시`, value: hour }))}
        />
      </Editor.Cell>
    </Editor.Row>
    <Editor.Title>근무장소</Editor.Title>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="근무장소를 입력해주세요." />
      </Editor.Cell>
    </Editor.Row>
  </Editor>
);

export default ConditionSection;
