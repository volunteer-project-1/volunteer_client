import React, { ComponentProps } from "react";

import styles from "@/components/home/Checkbox.module.scss";

// <input/>의 props에서 type 제외.
type CheckboxProps = Omit<ComponentProps<"input">, "type">;

/**
 * 공통 체크박스.
 * HTML 기본 체크박스가 스타일 커스텀이 안 되어서 만듬.
 * <input/>과 사용법이 동일함.
 */
const Checkbox = ({ className = "", ...others }: CheckboxProps) => (
  <>
    <input className={styles.realCheckbox} type={"checkbox"} {...others} />
    <span className={`${styles.fakeCheckbox} ${className}`} />
  </>
);

export default Checkbox;
