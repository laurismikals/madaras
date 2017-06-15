let gulp = require('gulp')
let svgmin = require('gulp-svgmin')
let svgSprite = require('gulp-svg-sprite')



//SVG
//task for creating SVG icon sprite. this task will create icon-sprite.svg file and it will icon font.
// icon sprite is used in the browsers which support it. icon font is used for the fallback.

let dist = `./public/dist` //path to distribution folder
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

// this task minifies all the icons and copies them into "icons-minified" folder
gulp.task('minify-svg-images', () => {
  return gulp.src(`${pathImg}svg/images/*.svg`)
    .pipe(svgmin())
    .pipe(gulp.dest(`./${pathImg}svg/images-minified`))
})
//some svg sprite configs
let svgImagesSpriteConfig = {
  mode: {
    symbol: {
      dest: '',
      sprite: 'images-sprite.svg'
    }
  }
}
//this task runs minify-icons task and concatenates all icons into one file
gulp.task('svg-images', ['minify-svg-images'], () => {
  return gulp.src(`./${pathImg}svg/images-minified/*.svg`)
    .pipe(svgSprite(svgImagesSpriteConfig))
    .pipe(gulp.dest(dist))
})
gulp.task('svg', ['icons', 'svg-images'])
//END SVG