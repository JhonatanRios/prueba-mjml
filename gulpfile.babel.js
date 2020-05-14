import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import htmlmin from 'gulp-htmlmin';
import strip from 'gulp-strip-comments';
import mjml from 'gulp-mjml';

const server = browserSync.create(),
    postCSSPlugins = [
        cssnano({
            autoprefixer: {
                add: true
            }
        })
    ];

gulp.task('sass', () =>
    gulp.src('./src/scss/**.scss')
    .pipe(sass())
    .pipe(postcss(postCSSPlugins))
    .pipe(gulp.dest('./public/css'))
    .pipe(server.stream({
        match: '**/*.css'
    }))
);

gulp.task('js', () =>
    gulp.src('./src/js/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./public/js'))
);

gulp.task('mjml', () => 
    gulp.src('./src/mjml/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./public/mjml'))
);

gulp.task('default', () => {
    server.init({
        server: {
            baseDir: './public'
        }
    });
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/mjml/*.mjml', ['mjml', server.reload]);
    gulp.watch('./src/mjml/**/*.mjml', ['mjml', server.reload]);
    gulp.watch('./src/js/*.js', ['js', server.reload]);
    gulp.watch("./public/*.html").on("change", server.reload);
    gulp.watch("./public/pages/**/*.html").on("change", server.reload);
    gulp.watch("./public/structure/**/*.html").on("change", server.reload);
});

gulp.task('html', function() {
    return gulp.src('./public/index.html')
      .pipe(strip())
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(concat('index.html'))
      .pipe(gulp.dest('./public/dist/'));
  });

gulp.task('minifyjs', () => {
    return gulp.src([
        './public/vendor/scrollreveal/scrollreveal.min.js',
        './public/vendor/wowjs/wow.min.js',
        './public/vendor/swiper/swiper.min.js'
    ])
    .pipe(uglify())
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest('./public/vendor/'));
});

gulp.task('dist', ['minifyjs', 'html']);