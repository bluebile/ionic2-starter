#!/usr/bin/env node

var shelljs = require('shelljs');
var path = require('path');
var args = JSON.parse(process.env.npm_config_argv).original;
var download = require('download');
console.log('Iniciando download do componente...');
download('https://github.com/mbamobi/mba-componentes/archive/master.zip', '.tmp', { extract: true }).then(() => {
  console.log('Download concluído. Copiando para pasta do projeto...');
  console.log(path.join('.tmp/mba-componentes-master/components', args[2], 'src'));
  shelljs.cp('-R', path.join('.tmp/mba-componentes-master/components', args[2], 'src') + '/*', 'src');
  try {
    console.log('Instalando dependências...');
    var packageJSON = require(path.join('../../.tmp/mba-componentes-master/components', args[2]) + '/package.json');
    var dependencies = packageJSON.dependencies;
    var devDependencies = packageJSON.devDependencies;
    if (dependencies) {
      for (var idx in dependencies) {
        shelljs.exec('npm install --save ' + idx + '@' + dependencies[idx]);
      }
    }
    if (devDependencies) {
      for (var idx in devDependencies) {
        shelljs.exec('npm install --save-dev ' + idx + '@' + devDependencies[idx]);
      }
    }
  } catch(e) {
    console.log ('Não encontrado package.json');
  }
  shelljs.rm('-rf', '.tmp');
  console.log('Done!');
});
