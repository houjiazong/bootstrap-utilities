const gulp = require('gulp')
const cssnano = require('gulp-cssnano')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const cached = require('gulp-cached')
const sass = require('gulp-sass')

// sass
gulp.task('sass', function () {
  return gulp.src('./index.scss')
    .pipe(cached('sass'))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist'))
})

gulp.task('build', ['sass'])

gulp.task('default', function () {
  gulp.start('build')
})

gulp.task('watch', function () {
  gulp.watch('**/*.scss', ['sass'])
})
