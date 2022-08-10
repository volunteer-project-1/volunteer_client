/**
 * 개발 모드인지 체크하는 함수.
 *
 * @returns 개발 모드이면 true, 배포 모드이면 false.
 */
export function isDevelopmentMode() {
  return process.env.NODE_ENV === "development";
}

type Logger = (...args: Array<unknown>) => void;

const pass: Logger = () => {
  // Do nothing.
};

// 개발 모드에서만 출력되는 함수들.
export const dLog: Logger = isDevelopmentMode() ? console.log : pass;
export const dWarn: Logger = isDevelopmentMode() ? console.warn : pass;
export const dError: Logger = isDevelopmentMode() ? console.error : pass;
