var gulp = require('gulp');
var fs = require('fs');
var requirejs = require('requirejs');
var concat = require('gulp-concat');

var packages = {
  'widget-a': 'node_modules/widget-a/dist/widget-a.js',
  'widget-b': 'node_modules/widget-b/dist/widget-b.js'
}

function getPackages () {
  var returnItems = [];
  var x = process.env.packages || 'widget-a';
  var items = x.split(',')
  items.forEach(function(item){
    returnItems.push(packages[item])
  });
  return returnItems;
}

gulp.task('concat', function () {
  var packageFiles = getPackages();
  return gulp.src(packageFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./site/scripts/'));
});


gulp.task('default', [
  'concat',
], () => {
});
