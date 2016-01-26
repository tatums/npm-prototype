#!/bin/bash

echo 'remove files'
rm ./site/scripts/app.js
rm -rf ./node_packages/widget-a/
rm -rf ./node_packages/widget-b/

rm -rf ./npm-packages/core/node_modules/
rm -rf ./npm-packages/widget-a/node_modules/
rm -rf ./npm-packages/widget-b/node_modules/
rm -rf ./npm-packages/widget-a/dist/
rm -rf ./npm-packages/widget-b/dist/



echo 'npm installing all the things'
cd npm-packages/core/
npm i

cd ../widget-a
npm i

cd ../widget-b
npm i

cd ../..


npm install

packages=widget-a,widget-b gulp
