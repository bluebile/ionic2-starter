#!/usr/bin/env node

var parser = require('xml2json');
var process = require('process');
var fs = require('fs');
var npmConfigJson = JSON.parse(process.env.npm_config_argv).original;
var indexEnv = npmConfigJson.indexOf('--env');
var env = 'dev';

if (indexEnv !== -1) {
  env = npmConfigJson[indexEnv+1];
} else if (npmConfigJson.indexOf('--dev') !== -1) {
  env = 'dev';
} else if (npmConfigJson.indexOf('--prod') !== -1) {
  env = 'prod';	
}

var data = fs.readFileSync( './config.xml');
data = JSON.parse(parser.toJson(data));

var content = fs.readFileSync('./src/app/app.env.ts.skel');
var comtentReplace = content.toString().replace(/Env: string = '.*'/, `Env: string = '${env}'`)
  .replace('replace-version', data['widget']['version'])
  .replace('replace-bundle', data['widget']['id']);
var wstream = fs.createWriteStream('./src/app/app.env.ts', { ovewrite: true });
wstream.write(comtentReplace);
wstream.end();
