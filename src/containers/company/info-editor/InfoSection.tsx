import React from "react";

import { dLog } from "@/utils/DebugUtils";
import Editor from "@/components/editor";

const InfoSection = () => (
  <Editor>
    <Editor.Title>기업정보</Editor.Title>
    <Editor.Row>
      <Editor.Cell layout="column">
        <Editor.ImageUploader label="기업사진 추가" url={undefined} onUpload={file => {}} />
        <Editor.ImageUploader label="기업로고 추가" url={undefined} onUpload={file => {}} />
      </Editor.Cell>
      <Editor.Cell layout="column" fill>
        <Editor.Row>
          <Editor.Cell fill>
            <Editor.SmallInput placeholder="기업명" isRequired />
          </Editor.Cell>
        </Editor.Row>
        <Editor.Row>
          <Editor.Cell fill>
            <Editor.SmallInput placeholder="연락처" type="tel" isRequired />
          </Editor.Cell>
        </Editor.Row>
        <Editor.Row>
          <Editor.Cell fill>
            <Editor.SmallInput placeholder="설립일자" type="date" isRequired />
          </Editor.Cell>
        </Editor.Row>
        <Editor.Row>
          <Editor.Cell fill>
            <Editor.SmallInput placeholder="이메일" type="email" />
          </Editor.Cell>
        </Editor.Row>
        <Editor.Row>
          <Editor.Cell fill>
            <Editor.SmallAddress
              placeholder="주소"
              isRequired
              onChange={value => {
                dLog(value);
              }}
            />
          </Editor.Cell>
        </Editor.Row>
        <Editor.Row>
          <Editor.Cell fill>
            <Editor.SmallInput placeholder="홈페이지 URL" type="url" />
          </Editor.Cell>
        </Editor.Row>
        <Editor.Row>
          <Editor.Cell fill>
            <Editor.SmallInput placeholder="투자유치" />
          </Editor.Cell>
        </Editor.Row>
        <Editor.Row>
          <Editor.Cell fill>
            <Editor.SmallInput placeholder="구성원" />
          </Editor.Cell>
        </Editor.Row>
        <Editor.Row>
          <Editor.Cell fill>
            <Editor.SmallInput placeholder="산업분야" isRequired />
          </Editor.Cell>
        </Editor.Row>
      </Editor.Cell>
    </Editor.Row>
  </Editor>
);

export default InfoSection;
