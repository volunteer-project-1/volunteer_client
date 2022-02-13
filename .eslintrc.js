module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  // 체크에서 제외.
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': ['error', {
      // "..." 대신 '...' 사용.
      singleQuote: true,
      // ; 필수.
      semi: true,
      // 탭 대신 스페이스 사용.
      useTabs: false,
      // 들여쓰기 단위.
      tabWidth: 2,
      // 최대 너비.
      printWidth: 120,
      // 화살표 함수에서 인수가 1개면 괄호 X.
      arrowParens: 'avoid',
      // 줄 끝(LF/CRLF): 각 파일에 따라 알아서.
      endOfLine: 'auto'
    }],
    // 화살표 함수에서 return 생략 가능하면 생략함.
    // ex. () => { return 5; } 대신 () => 5 형식 사용.
    'arrow-body-style': ['error', 'as-needed']
  }
};
