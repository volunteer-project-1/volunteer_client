module.exports = {
  plugins: ["jsx-a11y", "prettier"],
  extends: ["next/core-web-vitals", "prettier", "plugin:jsx-a11y/recommended"],
  // 체크에서 제외.
  ignorePatterns: ["node_modules/"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    // 화살표 함수에서 return 생략 가능하면 생략함.
    // ex. () => { return 5; } 대신 () => 5 형식 사용.
    "arrow-body-style": ["error", "as-needed"],
    // href를 <a/> 대신 Next <Link/>에 넣을 수 있도록 허용.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    // <img/> 대신 Next <Image/> 쓰라고 경고 뜨는거 off.
    "@next/next/no-img-element": "off",
  },
};
