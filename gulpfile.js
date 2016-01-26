var gulp = require('gulp');
var fs = require('fs');
var requirejs = require('requirejs');
var amdclean = require('amdclean');

gulp.task('amd', [], (done) => {
  requirejs.optimize({
    name: 'src/main',
    findNestedDependencies: true,
    baseUrl: '.',
    out: 'site/scripts/opinionlab.js',
    onModuleBundleComplete(data) {
      const outputFile = data.path;
      fs.writeFileSync(outputFile, amdclean.clean({
        filePath: outputFile
      }));
      done();
    }
  });
});

gulp.task('default', ['amd'], () => {

});

