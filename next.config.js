module.exports = {
  i18n: {
    locales: ["ko", "en"],
    // <html lang="...">을 설정해줌.
    defaultLocale: "ko",
  },
  sassOptions: {
    // SCSS 파일들에 자동으로 넣을 코드.
    // prependData 옵션이랑 동일. (additionalData가 더 최신 이름인듯)
    additionalData: `@use "@/assets/scss/index" as *;`
  },
  rewrites: async () => [
    // 클라이언트랑 서버랑 IP가 다르므로, CORS 문제를 피하기 위해
    // 클라이언트가 요청을 직접 보내지 않고 웹 서버(Next.js)가 대신 보냄.
    // https://velog.io/@maliethy/nextjs-reverse-proxy로-cors에러-해결하기
    {
      source: "/:path*",
      destination: "http://3.39.89.127:3000/:path*"
    }
  ]
};
