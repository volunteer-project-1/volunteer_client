module.exports = {
    sassOptions: {
        // SCSS 파일들에 자동으로 넣을 코드.
        // prependData 옵션이랑 동일. (additionalData가 더 최신 이름인듯)
        additionalData: `@use "@/assets/scss/index" as *;`,
        productionBrowserSourceMaps: true,
    }
};
