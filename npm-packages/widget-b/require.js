#! /usr/bin/env node

var requirejs = require('requirejs');

requirejs.optimize({
    baseUrl: __dirname,
    name: 'index',
    findNestedDependencies: true,
    out:  __dirname + 'dist/widget-b.js',
    'onModuleBundleComplete': function(data) {
      var fs = require('fs'),
        amdclean = require('amdclean'),
        outputFile = data.path;

      fs.writeFileSync(outputFile, amdclean.clean({
        'filePath': outputFile
      }));
    }
});

