var gulp = require('gulp');
var fs = require('fs');
var requirejs = require('requirejs');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();


var packages = {
  'widget-a': 'node_modules/widget-a/dist/widget-a.js',
  'widget-b': 'node_modules/widget-b/dist/widget-b.js'
}

gulp.task('build', function () {
  distFiles = [];
  var config = getFile();
  config.packages.forEach(function(p){
    var path = getPackagePath(p);
    distFiles.push(path)
  })
  return gulp.src(distFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./site/scripts/'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./site/"
    }
  });
  gulp.watch("site/scripts/**.js").on('change', browserSync.reload);
});


gulp.task('default', [ 'build', 'serve' ], function () { });





// Helpers fn's
function getFile () {
  var file = fs.readFileSync('build.config.js', 'utf-8');
  var output = JSON.parse(file);
  console.log('\n\nUsing build.config.js to build');
  console.log(output);
  console.log('\n\n');
  return output;
}

function getPackagePath (package) {
  return packages[package.name];
}

