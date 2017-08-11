const gulp = require('gulp');
const imageminify = require('gulp-imagemin');
const minfyjs = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('consolelog',function(){
    console.log('gulp logging ....');
});

gulp.task('copyJsFile',function(){
    gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist'))
});

gulp.task('imageMin',function(){

    gulp.src('src/img/*')
    .pipe(imageminify())
    .pipe(gulp.dest('dist/img'))

});

gulp.task('jsminify',()=>
gulp.src('src/js/*')
.pipe(minfyjs())
.pipe(gulp.dest('dist/js'))
);

gulp.task('concat',()=>
gulp.src('src/js/*')
.pipe(concat('bundle.js'))
.pipe(minfyjs())
.pipe(gulp.dest('dist/js'))
);

gulp.task('default',['imageMin','jsminify','concat']);