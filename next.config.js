const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  },
  i18n: {
    locales: ["ko", "en"],
    // <html lang="...">을 설정해줌.
    defaultLocale: "ko",
  },
  webpack: (config, { dev, webpack, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // IE 지원 위해 mui는 legacy build 사용.
      "@mui/base": "@mui/base/legacy",
      "@mui/lab": "@mui/lab/legacy",
      "@mui/material": "@mui/material/legacy",
      "@mui/private-theming": "@mui/private-theming/legacy",
      "@mui/styled-engine": "@mui/styled-engine/legacy",
      "@mui/system": "@mui/system/legacy",
      "@mui/utils": "@mui/utils/legacy",
    };

    // SCSS 처리.
    const sass2css = {
      loader: "sass-loader",
      options: {
        sourceMap: dev,
        // SCSS 파일들에 자동으로 넣을 코드.
        // prependData 옵션이랑 동일. (additionalData가 더 최신 이름인듯)
        additionalData: `@use "@/common/styles/index" as *;`,
      },
    };

    // .scoped.(s)css 처리.
    const scoped2css = {
      loader: "scoped-css-loader",
    };

    // CSS 내의 import 등 처리.
    const css2css = {
      loader: "css-loader",
      options: {
        sourceMap: dev,
        importLoaders: 2,
        // .module.(s)css 처리.
        modules: {
          auto: true,
          localIdentName: "[name]_[local]__[hash:base64:5]",
        },
      },
    };

    // .css 파일 생성.
    const css2file = {
      loader: MiniCssExtractPlugin.loader,
    };

    // <style> 생성.
    const css2style = {
      loader: "style-loader",
    };

    // use는 배열의 역순으로 처리됨에 유의!
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          // 개발 모드에서 .css 생성으로 통일하면 라우팅 시 스타일 안 먹는 문제 있음.
          // 개발 모드: SSR은 .css 생성, CSR은 <style/> 생성 / 배포 모드: 항상 .css 생성.
          isServer || !dev ? css2file : css2style,
          css2css,
          scoped2css,
          sass2css,
        ],
      },
    ];

    // 생성할 CSS 파일 이름 이렇게 해야 Next.js랑 호환됨.
    // https://github.com/seek-oss/vanilla-extract/issues/4#issuecomment-808792494
    const css2filePlugin = new MiniCssExtractPlugin({
      filename: "static/chunks/[chunkhash].css",
      chunkFilename: "static/chunks/[chunkhash].css",
    });

    // mini-css-extract-plugin은 Next.js가 사용하는 eval-source-map이랑 호환이 안 되어 이거 추가.
    // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/529#issuecomment-1020847358
    const cssSourceMapPlugin = new webpack.SourceMapDevToolPlugin({
      test: /\.css$/i,
      filename: null,
      append: "/*# sourceMappingURL=[url] */",
    });

    config.plugins = [...config.plugins, css2filePlugin, cssSourceMapPlugin];

    return config;
  },
  rewrites: async () => [
    // 클라이언트랑 서버랑 IP가 다르므로, CORS 문제를 피하기 위해
    // 클라이언트가 요청을 직접 보내지 않고 웹 서버(Next.js)가 대신 보냄.
    // https://velog.io/@maliethy/nextjs-reverse-proxy로-cors에러-해결하기
    {
      source: "/:path*",
      destination: "https://api.se3me.com/:path*",
    },
  ],
};
