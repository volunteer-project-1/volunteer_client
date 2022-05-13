/**
 * @file IE 등의 브라우저 지원을 위한 파일. 이 파일을 import하면 기능들이 자동으로 패치됨.
 */

if (typeof Object.fromEntries === "undefined") {
  // https://github.com/feross/fromentries에서 가져옴.
  Object.fromEntries = (entries: Array<any>) =>
    [...entries].reduce((obj, [key, val]) => {
      obj[key] = val;
      return obj;
    }, {});
}

export {};
