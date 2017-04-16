let gulp = require('gulp')
let plumber = require('gulp-plumber')
let order = require('gulp-order')
let concat = require('gulp-concat')
let svgmin = require('gulp-svgmin')
let svgSprite = require('gulp-svg-sprite')
let rename = require('gulp-rename')
let webpack = require('gulp-webpack')
let browserSync = require('browser-sync').create()
let postcss = require('gulp-postcss')
let postcssNested = require('postcss-nested')
let cssnext = require('postcss-cssnext')
let cssnano = require('cssnano')
let cssForLoop = require('postcss-for')
let cssMath = require('postcss-math')
let uglify = require('gulp-uglify')
let iconfont = require('gulp-iconfont')
let consolidate = require("gulp-consolidate")

let path = '' //path to frontend root
let dist = `./dist` //path to distribution folder
let cssPath = `web/css` //path to css folder
let viewsPath = `app/views` //path to views folder
//all the CSS files that gulp watches
//in the project we use ITCSS and Atomic design architecture, therefor css source order is important
let cssSrc = [
  `${cssPath}/01-generic/*.css`,
  `${cssPath}/02-base/*.css`,
  `${cssPath}/03-libs/*.css`,
  `${cssPath}/04-objects/*.css`,
  `${viewsPath}/00-atoms/*/*.css`,
  `${viewsPath}/01-molecules/*/*.css`,
  `${viewsPath}/02-organisms/*/*.css`,
  `${viewsPath}/04-pages/*/*.css`,
  `${cssPath}/05-trumps/*.css`,
  `${cssPath}/06-shame/*.css`
]

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

//CSS task
//all plugins used to compile CSS
let processors = [
  cssForLoop(),
  cssMath(),
  postcssNested(),
  cssnext({browsers: ['last 20 version']}),
  cssnano()
]
let themes = ['base'] //array that holds names of different css themes. this corresponds to css files in css/00-settings/ folder
let cssTasks = [] //array that will hold css task for every css theme

//function to create css task
let createTask = (theme, cssSrc) => {
  gulp.task(`concat-css${theme}`, () => {
    return gulp.src(cssSrc)
      .pipe(plumber())
      .pipe(order(cssSrc, {base: './'}))
      .pipe(concat(`bundle-${theme}.css`))
      .pipe(gulp.dest(dist))
      .pipe(rename(`bundle-${theme}-min.css`))
      .pipe(postcss(processors))
      .pipe(gulp.dest(dist))
      .pipe(browserSync.stream())
  })
}

//this creates task for every theme
themes.forEach((theme) => {
  let cssVarFile = [`${cssPath}/00-settings/colors-${theme}.css`] //take every color settings file
  let cssArr = cssVarFile.concat(cssSrc)

  createTask(theme, cssArr) //create task
  cssTasks.push('concat-css' + theme) //push task to cssTask array
})
//END CSS task

gulp.task('watch', () => {
  //run all created css tasks
  cssTasks.forEach((cssTask) => {
    gulp.watch(cssSrc, [cssTask])
  })
})

gulp.task('default', ['browser-sync', 'watch', 'webpack']) //create default gulp task. in comand line go to project root folder and run command "gulp" to execute the task

//SVG
//task for creating SVG icon sprite. this task will create icon-sprite.svg file and it will icon font.
// icon sprite is used in the browsers which support it. icon font is used for the fallback.

let pathImg = `web/img/`//path to image folder

// this task minifies all the icons and copies them into "icons-minified" folder
gulp.task('minify-icons', () => {
  return gulp.src(`${pathImg}svg/icons/*.svg`)
    .pipe(svgmin())
    .pipe(gulp.dest(`./${pathImg}svg/icons-minified`))
})

//some svg sprite configs
let iconsSpriteConfig = {
  mode: {
    symbol: {
      dest: '',
      sprite: 'icons-sprite.svg'
    }
  }
}

//this task runs minify-icons task and concatenates all icons into one file
gulp.task('icons', ['minify-icons'], () => {
  return gulp.src(`./${pathImg}svg/icons-minified/*.svg`)
    .pipe(svgSprite(iconsSpriteConfig))
    .pipe(gulp.dest(dist))
})

gulp.task('svg', ['icons'])
//END SVG