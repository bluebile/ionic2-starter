
// https://www.npmjs.com/package/fs-extra

module.exports = {
  copyIntl: {
    src: ['node_modules/intl/dist/Intl.min.js', 'node_modules/intl/locale-data/jsonp/pt-BR.js'],
    dest: '{{BUILD}}/intl'
  },
  copyAssets: {
    src: ['node_modules/\@mbamobi/mural-ionic/dist/esm/assets/img/empty_mural.png'],
    dest: '{{WWW}}/assets/img'
  }
}
