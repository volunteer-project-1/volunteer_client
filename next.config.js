const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  i18n: {
    locales: ["ko", "en"],
    // <html lang="...">을 설정해줌.
    defaultLocale: "ko",
  },
  webpack: (config, { dev, webpack }) => {
    const sass2css = {
      loader: "sass-loader",
      options: {
        sourceMap: dev,
        // SCSS 파일들에 자동으로 넣을 코드.
        // prependData 옵션이랑 동일. (additionalData가 더 최신 이름인듯)
        additionalData: `@use "@/assets/scss/index" as *;`
      }
    };

    const scoped2css = {
      loader: "scoped-css-loader"
    };

    const css2css = {
      loader: "css-loader",
      options: {
        sourceMap: dev,
        importLoaders: 2,
        modules: {
          auto: true,
          localIdentName: "[name]_[local]__[hash:base64:5]"
        }
      }
    };

    const css2file = {
      loader: MiniCssExtractPlugin.loader
    };

    // use는 배열의 역순으로 처리됨에 유의!
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(sc|c|sa)ss$/,
        use: [css2file, css2css, scoped2css, sass2css]
      }
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

    config.plugins = [
      ...config.plugins,
      css2filePlugin,
      cssSourceMapPlugin
    ];

    return config;
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
