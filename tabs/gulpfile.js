const gulp = require('gulp')
const del = require('del')
const plumber = require('gulp-plumber')
const server = require('browser-sync').create()

const rollup = require('gulp-better-rollup')
const sourcemaps = require('gulp-sourcemaps')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const uglify = require('gulp-uglify-es').default

const paths = {
  scripts: {
    src: 'src/js/tabs.js',
    dest: 'build/js'
  }
}

const scripts = () => {
  return gulp.src(paths.scripts.src)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(rollup({
    plugins: [
      resolve({browser: true}),
      commonjs(),
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [
          ['env', {
            'modules': false,
            'targets': {
              'browsers': ['>1%, not op_mini all']
            },
          }]
        ],
        plugins: [
          'external-helpers'
        ],
        externalHelpers: false,
      })
    ]
  }, {
    format: 'umd',
    name: 'Tabs'
  }))
  .pipe(uglify())
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest(paths.scripts.dest))
}

const clean = () => {
  return del('build')
}

gulp.task('clean', clean)

const htmlWatch = gulp.series(done => {
  server.reload()
  done()
})

const jsWatch = gulp.series(scripts, done => {
  server.reload()
  done()
})

const assemble = gulp.series(clean, scripts)

const serve = gulp.series(assemble, () => {
  server.init({
    server: './',
    notify: false,
    open: true,
    port: 3502,
    ui: false
  })

  gulp.watch('*.html', htmlWatch)
  gulp.watch('src/js/**/*.js', jsWatch)
})

gulp.task('serve', serve)

const build = gulp.series(assemble)

gulp.task('build', build)
