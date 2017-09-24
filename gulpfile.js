const gulp = require('gulp');
const gulpFile = require('gulp-file');

var PATHS = {
    src: 'src/**/*.ts',
    srcIndex: 'src/index.ts',
    specs: 'src/**/*.spec.ts',
    testHelpers: 'src/test/**/*.ts',
    demo: 'demo/**/*.ts',
    demoDist: 'demo/dist/**/*',
    typings: 'typings/index.d.ts',
    jasmineTypings: 'typings/globals/jasmine/index.d.ts',
    demoApiDocs: 'demo/src',
    coverageJson: 'coverage/json/coverage-final.json'
  };
  
  gulp.task('generate-docs', function() {
    var getApiDocs = require('./misc/get-doc');
    var docs = `const API_DOCS = ${JSON.stringify(getApiDocs(), null, 2)};\n\nexport default API_DOCS;`;
  
    return gulpFile('api-docs.ts', docs, {src: true}).pipe(gulp.dest(PATHS.demoApiDocs));
  });