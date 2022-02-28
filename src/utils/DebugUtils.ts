/**
 * 개발 모드인지 체크하는 함수.
 *
 * @returns 개발 모드이면 true, 배포 모드이면 false.
 */
export function isDevelopmentMode() {
  return process.env.NODE_ENV === "development";
}
