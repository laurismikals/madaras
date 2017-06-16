let gulp = require('gulp')
let plumber = require('gulp-plumber')
let order = require('gulp-order')
let concat = require('gulp-concat')
let rename = require('gulp-rename')
let postcss = require('gulp-postcss')
let postcssNested = require('postcss-nested')
let cssnext = require('postcss-cssnext')
let cssnano = require('cssnano')
let cssForLoop = require('postcss-for')
let cssMath = require('postcss-math')

let dist = `./static/dist` //path to distribution folder
let cssPath = `web/css` //path to css folder
let viewsPath = `app/02-shared` //path to views folder
//all the CSS files that gulp watches
//in the project we use ITCSS and Atomic design architecture, therefor css source order is important
let cssSrc = [
  `${cssPath}/00-settings/*.css`,
  `${cssPath}/01-generic/*.css`,
  `${cssPath}/02-base/*.css`,
  `${cssPath}/03-libs/*.css`,
  `${cssPath}/04-objects/*.css`,
  `${viewsPath}/00-atoms/*/*.css`,
  `${viewsPath}/01-molecules/*/*.css`,
  `${viewsPath}/02-cells/*/*.css`,
  `${viewsPath}/03-organisms/*/*.css`,
  `${viewsPath}/05-pages/*/*.css`,
  `${cssPath}/05-trumps/*.css`,
  `${cssPath}/06-shame/*.css`
]

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
  })
}

//this creates task for every theme
themes.forEach((theme) => {
  let cssVarFile = [`${cssPath}/00-settings/themes/colors-${theme}.css`] //take every color settings file
  let cssArr = cssVarFile.concat(cssSrc)

  createTask(theme, cssArr) //create task
  cssTasks.push(`concat-css${theme}`) //push task to cssTask array
})

gulp.task('css', cssTasks)

gulp.task('cssWatch', () => {
  //run all created css tasks
  cssTasks.forEach((cssTask) => {
    gulp.watch(cssSrc, [cssTask])
  })
})
//END CSS task