const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/barkey-project-frontend/',
  devServer: {
    historyApiFallback: true, // 서브 디렉토리 라우팅을 위한 설정
  },
})
