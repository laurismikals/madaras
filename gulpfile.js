let gulp = require('gulp')
let requireDir = require('require-dir')

requireDir('./web/css')//CSS task

requireDir('./web/img/svg')//SVG task

gulp.task('default', ['css', 'cssWatch', 'svg']) //create default gulp task. in command line go to project root folder and run command "gulp" to execute the task