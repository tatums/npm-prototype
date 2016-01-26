var gulp = require('gulp');
var fs = require('fs');
var requirejs = require('requirejs');
var amdclean = require('amdclean');
var concat = require('gulp-concat');


var packages = {
  'widget-a': 'node_modules/widget-a/dist/widget-a.js',
  'widget-b': 'node_modules/widget-b/dist/widget-b.js'
}

function getPackages () {
  var returnItems = [];
  var x = process.env.packages || '';
  var items = x.split(',')
  items.forEach(function(item){
    returnItems.push(packages[item])
  });
  return returnItems;
}

gulp.task('concat', function() {
  var packageFiles = getPackages();
  return gulp.src(packageFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./site/scripts/'));
});


gulp.task('amd:widget-a', function (done) {
  requirejs.optimize({
    name: 'index',
    findNestedDependencies: true,
    baseUrl: 'npm-packages/widget-a',
    out: 'npm-packages/widget-a/dist/widget-a.js',
    onModuleBundleComplete(data) {
      const outputFile = data.path;
      fs.writeFileSync(outputFile, amdclean.clean({
        filePath: outputFile
      }));
      done();
    }
  });
});


gulp.task('amd:widget-b', [], (done) => {
  requirejs.optimize({
    name: 'index',
    findNestedDependencies: true,
    baseUrl: 'npm-packages/widget-b',
    out: 'npm-packages/widget-b/dist/widget-b.js',
    onModuleBundleComplete(data) {
      const outputFile = data.path;
      fs.writeFileSync(outputFile, amdclean.clean({
        filePath: outputFile
      }));
      done();
    }
  });
});


gulp.task('default', [
  'amd:widget-a',
  'amd:widget-b',
  'concat',
], () => {
});
