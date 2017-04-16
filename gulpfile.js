let gulp = require('gulp')
let rename = require('gulp-rename')
let webpack = require('gulp-webpack')
let browserSync = require('browser-sync').create()
let uglify = require('gulp-uglify')
let requireDir = require('require-dir')

let path = '' //path to frontend root
let dist = `./dist` //path to distribution folder

//server for reloading page in every browser where the project is opened
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: `./${path}`
    }
  })
})

//Webpack task
//this task triggers webpack js build process. view webpack.config.js
gulp.task('webpack', () => {
  return gulp.src(`./${path}/app/entry.js`)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(dist))
    .pipe(rename('bundle-min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dist))
    .pipe(browserSync.stream())
})
//END Webpack task

requireDir('./web/css')//CSS task

requireDir('./web/img/svg')//SVG task

gulp.task('default', ['browser-sync', 'css', 'cssWatch', 'webpack', 'svg']) //create default gulp task. in command line go to project root folder and run command "gulp" to execute the task