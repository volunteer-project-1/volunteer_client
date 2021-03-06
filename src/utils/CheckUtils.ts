import { Optional } from "@/types/Common";

/**
 * 주어진 값이 존재하는지 판단.
 */
export function isExistent<T>(value: Optional<T>): value is T {
  return typeof value !== "undefined" && value !== null;
}

/**
 * 주어진 문자열이 존재하며 길이가 0보다 큰지 판단.
 */
export function isNonEmpty(value: Optional<string>): value is string {
  return isExistent(value) && value.length > 0;
}

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
