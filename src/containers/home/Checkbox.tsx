import React, { ComponentProps } from "react";

import "@/containers/home/Checkbox.scoped.scss";

// <input/>의 props에서 type 제외.
type CheckboxProps = Omit<ComponentProps<"input">, "type">;

/**
 * 공통 체크박스.
 * HTML 기본 체크박스가 스타일 커스텀이 안 되어서 만듬.
 * <input/>과 사용법이 동일함.
 */
const Checkbox = (props: CheckboxProps) => (
  <>
    <input className="hiddenCheckbox" type={"checkbox"} {...props} />
    <span className="checkbox" />
  </>
);

export default Checkbox;
