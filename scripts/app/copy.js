#!/usr/bin/env node

var shelljs       = require('shelljs');
var npmConfigJson = JSON.parse(process.env.npm_config_argv).original;

shelljs.rm('-rf', npmConfigJson[2]);
shelljs.cp('-R', './', npmConfigJson[2]);
shelljs.rm('-rf', npmConfigJson[2] + '/.git');
