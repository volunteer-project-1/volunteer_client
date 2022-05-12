import React from "react";

import Editor from "@/components/editor";

const ImageSection = () => (
  <Editor>
    <Editor.Title>사내 이미지를 추가하여보세요.</Editor.Title>
    <Editor.FileUploader extensions={["jpg", "jpeg", "bmp", "png", "gif", "svg"]} />
  </Editor>
);

export default ImageSection;
