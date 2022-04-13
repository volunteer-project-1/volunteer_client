import { useUID } from "react-uid";

/**
 * 주어진 문자열이 이메일 형식인지 판단.
 */
export function isEmail(value: string) {
  const match = value.match(/^\S+@\S+$/);
  return match !== null;
}

/**
 * 주어진 문자열이 비밀번호 형식인지 판단.
 */
export function isPassword(value: string) {
  // 정규표현식은 서버 소스코드에서 가져옴...
  const match = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d,.@$!%*?&]{10,}$/);
  return match !== null;
}

/**
 * Element에 id를 붙여야 할 때 사용.
 * 적절한 id를 하나 생성해줌.
 */
export function useID() {
  const uid = useUID();
  return `seeme-${uid}`;
}