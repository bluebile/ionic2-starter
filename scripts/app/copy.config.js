
// https://www.npmjs.com/package/fs-extra

module.exports = {
  include: [
    {
      src: '{{SRC}}/assets/',
      dest: '{{WWW}}/assets/'
    },
    {
      src: '{{SRC}}/index.html',
      dest: '{{WWW}}/index.html'
    },
    {
      src: '{{SRC}}/manifest.json',
      dest: '{{WWW}}/manifest.json'
    },
    {
      src: '{{SRC}}/service-worker.js',
      dest: '{{WWW}}/service-worker.js'
    },
    {
      src: 'node_modules/ionic-angular/polyfills/polyfills.js',
      dest: '{{BUILD}}/polyfills.js'
    },
    {
      src: 'node_modules/ionicons/dist/fonts/',
      dest: '{{WWW}}/assets/fonts/'
    },
    {
      src: 'node_modules/ionic-angular/fonts/',
      dest: '{{WWW}}/assets/fonts/'
    },
    {
        src: '{{ROOT}}/node_modules/intl/dist/Intl.min.js',
        dest: '{{BUILD}}/intl/Intl.min.js'
    },
    {
        src: '{{ROOT}}/node_modules/intl/locale-data/jsonp/pt-BR.js',
        dest: '{{BUILD}}/intl/pt-BR.js'
    }
  ]
};
